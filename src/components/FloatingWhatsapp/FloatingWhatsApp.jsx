import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsApp.css";

const FloatingWhatsApp = () => {
  const buttonRef = useRef(null);

  const [position, setPosition] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = useRef({
    x: 0,
    y: 0,
    left: 0,
    top: 0,
  });

  const hasMoved = useRef(false);

  /* =========================================================
     WHATSAPP MESSAGE
  ========================================================= */

  const whatsappMessage = `Hello Bitsol Automation,

I would like to discuss an engineering requirement.

Name:
Phone:
Email:
Company:

Requirement:


Thank you.`;

  const whatsappUrl =
    `https://wa.me/917826800765?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  /* =========================================================
     KEEP BUTTON INSIDE VIEWPORT
  ========================================================= */

  const keepInsideViewport = () => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const margin = 10;

    let left = rect.left;
    let top = rect.top;

    const maxLeft =
      window.innerWidth - button.offsetWidth - margin;

    const maxTop =
      window.innerHeight - button.offsetHeight - margin;

    left = Math.max(
      margin,
      Math.min(left, maxLeft)
    );

    top = Math.max(
      margin,
      Math.min(top, maxTop)
    );

    setPosition({
      x: left,
      y: top,
    });
  };

  /* =========================================================
     VIEWPORT RESIZE
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (position) {
        keepInsideViewport();
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [position]);

  /* =========================================================
     START DRAG
  ========================================================= */

  const handlePointerDown = (event) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect =
      button.getBoundingClientRect();

    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      left: rect.left,
      top: rect.top,
    };

    hasMoved.current = false;

    setIsDragging(true);

    button.setPointerCapture?.(
      event.pointerId
    );
  };

  /* =========================================================
     DRAG
  ========================================================= */

  const handlePointerMove = (event) => {
    if (!isDragging) return;

    const deltaX =
      event.clientX -
      dragStart.current.x;

    const deltaY =
      event.clientY -
      dragStart.current.y;

    if (
      Math.abs(deltaX) > 5 ||
      Math.abs(deltaY) > 5
    ) {
      hasMoved.current = true;
    }

    const button =
      buttonRef.current;

    if (!button) return;

    const margin = 10;

    const maxLeft =
      window.innerWidth -
      button.offsetWidth -
      margin;

    const maxTop =
      window.innerHeight -
      button.offsetHeight -
      margin;

    const newLeft = Math.min(
      Math.max(
        margin,
        dragStart.current.left + deltaX
      ),
      maxLeft
    );

    const newTop = Math.min(
      Math.max(
        margin,
        dragStart.current.top + deltaY
      ),
      maxTop
    );

    setPosition({
      x: newLeft,
      y: newTop,
    });
  };

  /* =========================================================
     END DRAG
  ========================================================= */

  const handlePointerUp = (event) => {
    setIsDragging(false);

    buttonRef.current?.releasePointerCapture?.(
      event.pointerId
    );
  };

  /* =========================================================
     CLICK
  ========================================================= */

  const handleClick = (event) => {
    if (hasMoved.current) {
      event.preventDefault();

      hasMoved.current = false;

      return;
    }

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =========================================================
     POSITION STYLE
  ========================================================= */

  const positionStyle = position
    ? {
        left: `${position.x}px`,
        top: `${position.y}px`,
        right: "auto",
        bottom: "auto",
      }
    : {};

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`floating-whatsapp ${
        isDragging
          ? "floating-whatsapp-dragging"
          : ""
      }`}
      style={positionStyle}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={handleClick}
      aria-label="Chat with Bitsol Automation on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </button>
  );
};

export default FloatingWhatsApp;