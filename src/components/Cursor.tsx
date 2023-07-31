"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.top = e.pageY - 10 + 'px';
      cursor.style.left = e.pageX - 10 + 'px';

      const target = e.target as HTMLElement;
      const targetBgColor = getComputedStyle(target).backgroundColor;
      cursor.style.backgroundColor = isBlack(targetBgColor) ? 'white' : 'black';
    };

    const onClick = () => {
      cursor.classList.add('expand');
      setTimeout(() => {
        cursor.classList.remove('expand');
      }, 500);
    };

    const onMouseDown = () => {
      cursor.classList.add('expand');
      setTimeout(() => {
        cursor.classList.remove('expand');
      }, 500);
    };

    const onMouseUp = () => {
      cursor.classList.add('expand');
      setTimeout(() => {
        cursor.classList.remove('expand');
      }, 500);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('click', onClick);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', onClick);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const isBlack = (color: string) => {
    const rgb = color.match(/\d+/g);
    if (rgb) {
      const [r, g, b] = rgb.map(Number);
      return r === 0 && g === 0 && b === 0;
    }
    return false;
  };

  return (
    <div
      ref={cursorRef}
      className='fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-50 mix-blend-difference p-4 flex justify-center items-center bg-black'
    >
      <span className='text-sm text-white font-bold'>View</span>
    </div>
  );
}
