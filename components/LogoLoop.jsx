'use client';

import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
};

const toCssLength = value => (typeof value === 'number' ? `${value}px` : (value ?? undefined));

const cx = (...parts) => parts.filter(Boolean).join(' ');

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, ...dependencies]);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) onLoad();
    };

    images.forEach(img => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad, { once: true });
        img.addEventListener('error', handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onLoad, seqRef, ...dependencies]);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const seqSize = isVertical ? seqHeight : seqWidth;

    if (seqSize > 0) {
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      track.style.transform = isVertical
        ? `translate3d(0, ${-offsetRef.current}px, 0)`
        : `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    if (prefersReduced) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return () => { lastTimestampRef.current = null; };
    }

    const animate = timestamp => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqSize > 0) {
        let nextOffset = ((offsetRef.current + velocityRef.current * deltaTime) % seqSize + seqSize) % seqSize;
        offsetRef.current = nextOffset;
        track.style.transform = isVertical
          ? `translate3d(0, ${-offsetRef.current}px, 0)`
          : `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical, trackRef]);
};

/**
 * LogoLoop / ImageSlider
 *
 * Sizing props (all optional):
 *   containerHeight — explicit height for the outer container div. REQUIRED when
 *                     you want a taller slider row (e.g. containerHeight={240}).
 *                     Without this the container collapses to the item's natural height.
 *   itemWidth       — fixed width per item  (number → px, or any CSS string)
 *   itemHeight      — fixed height per item (number → px, or CSS string).
 *                     When omitted items size to their natural/aspect height.
 *   itemMinWidth / itemMinHeight / itemMaxWidth / itemMaxHeight — constraints
 *   objectFit       — CSS object-fit for <img> ('contain'|'cover'|'fill'|'none'|'scale-down')
 *   aspectRatio     — CSS aspect-ratio (e.g. '16/9', '4/3', '1')
 *
 * Legacy prop:
 *   logoHeight      — alias for itemHeight (backwards-compatible)
 *
 * Item shapes:
 *   { src, srcSet, sizes, width, height, alt, title, href, ariaLabel }  ← image
 *   { node, href, title, ariaLabel }                                     ← any node
 */
export const LogoLoop = memo(({
  logos,
  speed = 120,
  direction = 'left',
  width = '100%',
  // ── container sizing ────────────────────────────────────────────────
  containerHeight,      // ← NEW: explicit height for the outer div
  // ── item sizing ─────────────────────────────────────────────────────
  logoHeight,           // legacy alias for itemHeight
  itemWidth,
  itemHeight,
  itemMinWidth,
  itemMinHeight,
  itemMaxWidth,
  itemMaxHeight,
  objectFit = 'contain',
  aspectRatio,
  // ── gap & hover ─────────────────────────────────────────────────────
  gap = 32,
  pauseOnHover,
  hoverSpeed,
  // ── visual ──────────────────────────────────────────────────────────
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = true,
  // ── custom render ───────────────────────────────────────────────────
  renderItem,
  // ── a11y / misc ─────────────────────────────────────────────────────
  ariaLabel = 'Scrolling items',
  className,
  style
}) => {
  const containerRef = useRef(null);
  const trackRef     = useRef(null);
  const seqRef       = useRef(null);

  const [seqWidth,  setSeqWidth]  = useState(0);
  const [seqHeight, setSeqHeight] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  // Resolve legacy logoHeight into itemHeight
  const resolvedItemHeight = itemHeight ?? (logoHeight != null ? logoHeight : undefined);

  const effectiveHoverSpeed = useMemo(() => {
    if (hoverSpeed !== undefined) return hoverSpeed;
    if (pauseOnHover === true)    return 0;
    if (pauseOnHover === false)   return undefined;
    return 0;
  }, [hoverSpeed, pauseOnHover]);

  const isVertical = direction === 'up' || direction === 'down';

  const targetVelocity = useMemo(() => {
    const mag = Math.abs(speed);
    const dir = isVertical
      ? (direction === 'up'   ? 1 : -1)
      : (direction === 'left' ? 1 : -1);
    return mag * dir * (speed < 0 ? -1 : 1);
  }, [speed, direction, isVertical]);

  const updateDimensions = useCallback(() => {
    const containerWidth  = containerRef.current?.clientWidth  ?? 0;
    const sequenceRect    = seqRef.current?.getBoundingClientRect?.();
    const sequenceWidth   = sequenceRect?.width  ?? 0;
    const sequenceHeight  = sequenceRect?.height ?? 0;

    if (isVertical) {
      const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
      if (containerRef.current && parentHeight > 0) {
        const h = Math.ceil(parentHeight);
        if (containerRef.current.style.height !== `${h}px`)
          containerRef.current.style.height = `${h}px`;
      }
      if (sequenceHeight > 0) {
        setSeqHeight(Math.ceil(sequenceHeight));
        const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
        setCopyCount(Math.max(
          ANIMATION_CONFIG.MIN_COPIES,
          Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM
        ));
      }
    } else if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      setCopyCount(Math.max(
        ANIMATION_CONFIG.MIN_COPIES,
        Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM
      ));
    }
  }, [isVertical]);

  useResizeObserver(
    updateDimensions,
    [containerRef, seqRef],
    [logos, gap, resolvedItemHeight, itemWidth, isVertical]
  );

  useImageLoader(seqRef, updateDimensions, [logos, gap, resolvedItemHeight, itemWidth, isVertical]);

  useAnimationLoop(
    trackRef, targetVelocity, seqWidth, seqHeight,
    isHovered, effectiveHoverSpeed, isVertical
  );

  // ── CSS variables ────────────────────────────────────────────────────
  const cssVariables = useMemo(() => ({
    '--ll-gap':        `${gap}px`,
    '--ll-item-w':     toCssLength(itemWidth)    ?? 'auto',
    '--ll-item-h':     toCssLength(resolvedItemHeight) ?? 'auto',
    '--ll-item-min-w': toCssLength(itemMinWidth) ?? 'unset',
    '--ll-item-min-h': toCssLength(itemMinHeight)?? 'unset',
    '--ll-item-max-w': toCssLength(itemMaxWidth) ?? 'unset',
    '--ll-item-max-h': toCssLength(itemMaxHeight)?? 'unset',
    '--ll-aspect':     aspectRatio ?? 'unset',
    '--ll-object-fit': objectFit,
    ...(fadeOutColor && { '--ll-fade-color': fadeOutColor })
  }), [gap, itemWidth, resolvedItemHeight, itemMinWidth, itemMinHeight,
       itemMaxWidth, itemMaxHeight, aspectRatio, objectFit, fadeOutColor]);

  const rootClasses = useMemo(() => cx(
    'relative group',
    isVertical ? 'h-full inline-block' : '',
    '[--ll-fade-color-auto:#ffffff]',
    'dark:[--ll-fade-color-auto:#0b0b0b]',
    scaleOnHover && 'py-[4px]',
    className
  ), [isVertical, scaleOnHover, className]);

  const handleMouseEnter = useCallback(() => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(true);
  }, [effectiveHoverSpeed]);

  const handleMouseLeave = useCallback(() => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(false);
  }, [effectiveHoverSpeed]);

  // ── Item renderer ────────────────────────────────────────────────────
  const renderLogoItem = useCallback((item, key) => {
    if (renderItem) {
      return (
        <li
          key={key}
          role="listitem"
          className={cx(
            'flex-none',
            isVertical ? 'mb-[var(--ll-gap)]' : 'mr-[var(--ll-gap)]',
            scaleOnHover && 'overflow-visible group/item'
          )}>
          {renderItem(item, key)}
        </li>
      );
    }

    const isNodeItem = 'node' in item;

    // ── Shared item box styles ─────────────────────────────────────────
    // Width / height are driven by CSS variables so the consumer can
    // choose flexible sizing (image slider) or fixed logo sizing.
    const itemBoxStyle = {
      width:     'var(--ll-item-w)',
      height:    'var(--ll-item-h)',
      minWidth:  'var(--ll-item-min-w)',
      minHeight: 'var(--ll-item-min-h)',
      maxWidth:  'var(--ll-item-max-w)',
      maxHeight: 'var(--ll-item-max-h)',
      aspectRatio: 'var(--ll-aspect)',
    };

    // In slider mode (containerHeight set) the li and image fill the full row height.
    // In logo mode they size to the item's natural / explicit height.
    const stretchMode = containerHeight != null && !isNodeItem;

    const content = isNodeItem ? (
      <span
        className={cx(
          'inline-flex items-center justify-center w-full h-full',
          scaleOnHover &&
            'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-105'
        )}
        style={itemBoxStyle}
        aria-hidden={!!item.href && !item.ariaLabel}>
        {item.node}
      </span>
    ) : (
      <img
        className={cx(
          'block [-webkit-user-drag:none] pointer-events-none',
          '[image-rendering:-webkit-optimize-contrast]',
          'motion-reduce:transition-none',
          // In stretch/slider mode let the img fill the li's height naturally
          stretchMode && 'h-full',
          scaleOnHover &&
            'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-105'
        )}
        style={{
          // In stretch mode height is controlled by the flex row; only apply
          // itemBoxStyle dimensions when they are explicitly set by the consumer.
          ...(stretchMode ? {
            width:       itemWidth != null ? 'var(--ll-item-w)' : 'auto',
            minWidth:    'var(--ll-item-min-w)',
            maxWidth:    'var(--ll-item-max-w)',
            aspectRatio: 'var(--ll-aspect)',
            objectFit:   'var(--ll-object-fit)',
          } : {
            ...itemBoxStyle,
            objectFit: 'var(--ll-object-fit)',
          }),
        }}
        src={item.src}
        srcSet={item.srcSet}
        sizes={item.sizes}
        width={item.width}
        height={item.height}
        alt={item.alt ?? ''}
        title={item.title}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    );

    const itemAriaLabel = isNodeItem
      ? (item.ariaLabel ?? item.title)
      : (item.alt ?? item.title);

    const inner = item.href ? (
      <a
        className={cx(
          'inline-flex items-center justify-center no-underline rounded',
          'transition-opacity duration-200 ease-linear hover:opacity-80',
          'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2',
          stretchMode && 'h-full'
        )}
        href={item.href}
        aria-label={itemAriaLabel || 'item link'}
        target="_blank"
        rel="noreferrer noopener">
        {content}
      </a>
    ) : content;

    return (
      <li
        key={key}
        role="listitem"
        className={cx(
          'flex-none flex items-center justify-center',
          // In stretch mode the li fills the full row height so the image can fill it too
          stretchMode ? 'h-full' : '',
          isVertical ? 'mb-[var(--ll-gap)]' : 'mr-[var(--ll-gap)]',
          scaleOnHover && 'overflow-visible group/item'
        )}>
        {inner}
      </li>
    );
  }, [isVertical, scaleOnHover, renderItem, containerHeight, itemWidth]);

  const logoLists = useMemo(() =>
    Array.from({ length: copyCount }, (_, copyIndex) => (
      <ul
        key={`copy-${copyIndex}`}
        className={cx(
          'flex',
          // When the consumer has set an explicit container height (image-slider mode),
          // stretch items to fill the full row. Otherwise centre them (logo-strip mode).
          isVertical
            ? 'flex-col'
            : (containerHeight != null ? 'items-stretch h-full' : 'items-center')
        )}
        role="list"
        aria-hidden={copyIndex > 0}
        ref={copyIndex === 0 ? seqRef : undefined}>
        {logos.map((item, i) => renderLogoItem(item, `${copyIndex}-${i}`))}
      </ul>
    )), [copyCount, logos, renderLogoItem, isVertical, containerHeight]);

  const containerStyle = useMemo(() => ({
    width: isVertical
      ? (toCssLength(width) === '100%' ? undefined : toCssLength(width))
      : (toCssLength(width) ?? '100%'),
    // Explicit container height — the primary lever for image-slider row height.
    ...(containerHeight != null && { height: toCssLength(containerHeight) }),
    // Clip only the scrolling axis. Using separate overflow-x / overflow-y avoids
    // the browser bug where overflow-x:hidden implicitly clips overflow-y too.
    overflow: 'hidden',
    ...cssVariables,
    ...style
  }), [width, containerHeight, cssVariables, style, isVertical]);

  // ── Fade overlays ────────────────────────────────────────────────────
  const fadeGradient = fadeOut && (
    <>
      {isVertical ? (
        <>
          <div aria-hidden className={cx(
            'pointer-events-none absolute inset-x-0 top-0 z-10',
            'h-[clamp(24px,8%,120px)]',
            'bg-[linear-gradient(to_bottom,var(--ll-fade-color,var(--ll-fade-color-auto))_0%,transparent_100%)]'
          )} />
          <div aria-hidden className={cx(
            'pointer-events-none absolute inset-x-0 bottom-0 z-10',
            'h-[clamp(24px,8%,120px)]',
            'bg-[linear-gradient(to_top,var(--ll-fade-color,var(--ll-fade-color-auto))_0%,transparent_100%)]'
          )} />
        </>
      ) : (
        <>
          <div aria-hidden className={cx(
            'pointer-events-none absolute inset-y-0 left-0 z-10',
            'w-[clamp(24px,8%,120px)]',
            'bg-[linear-gradient(to_right,var(--ll-fade-color,var(--ll-fade-color-auto))_0%,transparent_100%)]'
          )} />
          <div aria-hidden className={cx(
            'pointer-events-none absolute inset-y-0 right-0 z-10',
            'w-[clamp(24px,8%,120px)]',
            'bg-[linear-gradient(to_left,var(--ll-fade-color,var(--ll-fade-color-auto))_0%,transparent_100%)]'
          )} />
        </>
      )}
    </>
  );

  return (
    <div
      ref={containerRef}
      className={rootClasses}
      style={containerStyle}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {fadeGradient}
      <div
        ref={trackRef}
        className={cx(
          'flex will-change-transform select-none relative z-0',
          'motion-reduce:transform-none',
          isVertical ? 'flex-col h-max w-full' : 'flex-row w-max'
        )}
        // height:100% so the track fills the container when containerHeight is set,
        // letting items stretch via align-items:stretch on the ul
        style={!isVertical && containerHeight != null ? { height: '100%' } : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {logoLists}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;