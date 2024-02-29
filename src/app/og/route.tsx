import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title');

  const font = fetch(
    new URL('../../../public/Migra-Extralight.otf', import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;
    
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(https://knlrvr.dev/og-bg.png)',
        }}
      >
        <div 
          style={{
            marginLeft: 100,
            marginRight: 190,
            marginBottom: 120,
            display: 'flex',
            fontSize: 130,
            letterSpacing: '-0.025em',
            color: 'white',
            lineHeight: '130px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {title ?? ''}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Migra Extralight',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}