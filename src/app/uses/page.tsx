import { Metadata } from "next";
import { Section, Subsection, SmallSection } from "../components/section";

export const metadata: Metadata = {
    title: 'Kane Lariviere | Tech',
    description: 'Kane Lariviere • Software Developer • Tech',
}

export default function Tech() {
    return (
            <div className="">

                <SmallSection title="Office">
                        <ul className="text-sm">
                            <li>M1 MacBook Air (2020)</li>
                            <li>M1 Mac Mini (2020)</li>
                            <li>Apple Magic Keyboard</li>
                            <li>Apple Magic Mouse</li>
                            <li>27&quot; Samsung Curved Monitor</li>
                            <li>24&quot; Dell Monitor</li>
                            <li>Secretlab TITAN Evo Chair</li>
                        </ul>
                </SmallSection>

                <SmallSection title="Coding">
                    <ul className="text-sm">
                        <li><strong className="text-neutral-500">Editor:</strong> VSCode & Neovim</li>
                        <li><strong className="text-neutral-500">Terminal:</strong> Ghostty with tmux</li>
                    </ul>
                </SmallSection>

                <SmallSection title="Productivity">
                    <ul className="text-sm">
                        <li>Raycast</li>
                        <li>Obsidian</li>
                        <li>Notion <em className="text-neutral-600 dark:text-neutral-400">(sometimes)</em></li>
                    </ul>
                </SmallSection>

                <SmallSection title="Gaming">
                    <ul className="text-sm">
                        <li>Windows 10</li>
                        <li>Intel Core i5 9400F</li>
                        <li>MSI MAG B365M MORTAR</li>
                        <li>16GB T-Force Delta DDR4</li>
                        <li>NVIDIA GeForce GTX 1660 SUPER</li>
                        <li>Corsair K55 RGB Pro Keyboard</li>
                        <li>Corsair M65 RGB ULTRA Mouse</li>
                        <li>Corsair VOID RGB ELITE Headset</li>
                    </ul>
                </SmallSection>

                <SmallSection title="Audio / Video">
                    <ul className="text-sm">
                        <li>PreSonus Eris 3.5 Monitors</li>
                        <li>Scarlett 4i4 Interface</li>
                        <li>Mackie HM-4 Headphone Amplifier</li>
                        <li>Shure SM7B Microphone</li>
                        <li>Elgato Wave Mic Arm</li>
                        <li>Logitech C920 Webcam</li>
                        <li>Logic Pro X</li>
                        <li>Final Cut Pro</li>
                    </ul>
                </SmallSection>

                <SmallSection title="Music">
                    <ul className="text-sm">
                        <li>Gibson Les Paul</li>
                        <li>Orange Crush Pro 120 Amp Head + Orange FS2</li>
                        <li>Peavey 5150 4 x 12 Cabinet</li>
                        <li>Akai MPK Mini MKIII</li>
                    </ul>   
                </SmallSection>
                
            </div>
    )
}