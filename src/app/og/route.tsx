import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title');

  const font = fetch(
    new URL('../../../public/fonts/Migra-Extralight.otf', import.meta.url)
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
            marginLeft: 95,
            marginRight: 190,
            marginBottom: 150,
            display: 'flex',
            fontSize: 120,
            letterSpacing: '-0.025em',
            color: 'white',
            lineHeight: '105px',
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