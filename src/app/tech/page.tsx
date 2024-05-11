import { Reveal } from "../utils/reveal";


export default function Tech() {
    return (
        <div>
            <Reveal>
                <span className="text-neutral-300 text-sm font-light tracking-wide leading-6 mt-2">
                    Here&apos;s a list of the things I use nearly every day. 
                </span>
            </Reveal>

            <div className="mt-8 flex flex-col space-y-8">

                <Reveal>
                    <div>
                        <span className="font-medium tracking-widest">Office &mdash;</span>
                        <ul className="text-sm list-disc ml-4 mt-2 text-neutral-500">
                            <li>M1 Mac Mini (2020)</li>
                            <li>M1 MacBook Air (2020)</li>
                            <li>Apple Magic Keyboard</li>
                            <li>Apple Magic Mouse</li>
                            <li>27&quot; Samsung Curved Monitor</li>
                            <li>24&quot; Dell Monitor</li>
                            <li>Secretlab TITAN Evo Chair</li>
                        </ul>
                    </div>
                </Reveal>

                <Reveal>
                    <div>
                        <span className="font-medium tracking-widest">Coding &mdash;</span>
                        <ul className="text-sm list-disc ml-4 mt-2 text-neutral-500">
                            <li><strong className="text-neutral-400">Editor</strong>: VSCode </li>
                            <li><strong className="text-neutral-400">Theme</strong>: Vitesse Black</li>
                            <li><strong className="text-neutral-400">Terminal</strong>: Warp</li>
                            <li><strong className="text-neutral-400">Exploring</strong>: Neovim & Zed</li>
                        </ul>
                    </div>
                </Reveal>

                <Reveal>
                    <div>
                        <span className="font-medium tracking-widest">Organization &mdash;</span>
                        <ul className="text-sm list-disc ml-4 mt-2 text-neutral-500">
                            <li>Obsidian</li>
                            <li>Excalidraw</li>
                            <li>Notion <em>(sometimes)</em></li>
                        </ul>
                    </div>
                </Reveal>

                <Reveal>
                    <div>
                        <span className="font-medium tracking-widest">Gaming &mdash;</span>
                        <ul className="text-sm list-disc ml-4 mt-2 text-neutral-500">
                            <li>Windows 10</li>
                            <li>Intel Core i5 9400F</li>
                            <li>MSI MAG B365M MORTAR</li>
                            <li>16GB T-Force Delta DDR4</li>
                            <li>NVIDIA GeForce GTX 1660 SUPER</li>
                            <li>Corsair K55 RGB Pro Keyboard</li>
                            <li>Corsair M65 RGB ULTRA Mouse</li>
                            <li>Corsair VOID RGB ELITE Headset</li>
                            <li>Streamlabs</li>
                            <li>Nintendo Switch</li>
                        </ul>
                    </div>
                </Reveal>

                <Reveal>
                    <div>
                        <span className="font-medium tracking-widest">Audio / Video &mdash;</span>
                        <ul className="text-sm list-disc ml-4 mt-2 text-neutral-500">
                            <li>PreSonus Eris 3.5 Monitors</li>
                            <li>Scarlett 4i4 Interface</li>
                            <li>Mackie HM-4 Headphone Amplifier</li>
                            <li>Shure SM7B Microphone</li>
                            <li>Elgato Wave Mic Arm</li>
                            <li>Logitech C920 Webcam</li>
                            <li>Logic Pro X</li>
                            <li>Final Cut Pro</li>
                        </ul>
                    </div>
                </Reveal>

                <Reveal>
                    <div>
                        <span className="font-medium tracking-widest">Music &mdash;</span>
                        <ul className="text-sm list-disc ml-4 mt-2 text-neutral-500">
                            <li>Gibson Les Paul</li>
                            <li>Orange Crush Pro 120 Amp Head + Orange FS2</li>
                            <li>Peavey 5150 4 x 12 Cabinet</li>
                            <li>Akai MPK Mini MKIII</li>
                        </ul>
                    </div>
                </Reveal>

            </div>

        </div>
    )
}