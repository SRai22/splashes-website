import type { SVGProps } from 'react';
import Image from 'next/image';

/* ---------- Icons (using SVG files from /public/Images/icon-buttons) ---------- */
function createIconFromSvg(src: string) {
  return function Icon(props: SVGProps<SVGSVGElement>) {
    return (
      <div className={props.className} style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Image
          src={src}
          alt=""
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    );
  };
}

export const IconQuestion = createIconFromSvg('/Images/icon-buttons/question.svg');
export const IconParty = createIconFromSvg('/Images/icon-buttons/party-coordinator-form.svg');
export const IconConcern = createIconFromSvg('/Images/icon-buttons/concern.svg');
export const IconPool = createIconFromSvg('/Images/icon-buttons/swimming-pool.svg');
export const IconChecklist = createIconFromSvg('/Images/icon-buttons/suggestion.svg');
export const IconRibbon = createIconFromSvg('/Images/icon-buttons/compliment.svg');
export const IconClipboard = createIconFromSvg('/Images/icon-buttons/form.svg');
export const IconBaby = createIconFromSvg('/Images/icon-buttons/baby.svg');
