import Link from "next/link";
import RhombusItem from "../../assets/icons/rhombusItem";
import DownRightArrow from "../../assets/icons/downRightArrow";

export default function Hub() {
    return (
        <div className="my-container">
            <h1 className="header-1" >HUB - Tools - Documentation - Channels - Articles</h1>

            <p>
                GRIN scripts and tools. You can find scripts in <a className="text-primary"
                                                            href="https://github.com/grincc/tools/tree/main/scripts"
            >this directory</a>. Other resources of <a href="https://github.com/grincc/hub/tree/main/art" >art</a>, <a href="https://github.com/grincc/hub/tree/main/marketing">marketing</a>, <a href="https://github.com/grincc/hub/tree/main/memes">memes</a> and <a href="https://github.com/grincc/hub/tree/main/wallpapers">wallpapers</a> are also available.
            </p>

            {/*Grin main websites*/}
            <div className="py-4">
                <h2 className="header-2">Grin main websites</h2>
                <ul className="pl-4 pt-2 space-y-4" >
                    <li><RhombusItem />  <b>Grin official website: </b> Find all information and links to node and wallet software you might be searching for.
                        <p className="pl-8">
                            <a href="https://grin.mw/" className="text-primary">https://grin.mw/</a>
                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin main github page:</b>
                        <p className="pl-8">
                            <a href="https://github.com/mimblewimble/grin" className="text-primary">https://github.com/mimblewimble/grin</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Forum:</b> Discuss everything Grin
                        <p className="pl-8">
                            <a href="https://forum.grin.mw/" className="text-primary">https://forum.grin.mw/</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin Community Council site:</b>
                        <p className="pl-8">
                            <a href="https://grincc.mw/" className="text-primary">https://grincc.mw/</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin Community Council Github:</b>
                        <p className="pl-8">
                            <a href="https://github.com/grincc/" className="text-primary">https://github.com/grincc/</a>
                        </p>
                    </li>

                    

                </ul>
            </div>

            {/*Grin wallets*/}
            <div className="py-4">
                <h2 className="header-2">Grin wallets</h2>
                <ul className="pl-4 pt-2 space-y-4" >
                    <li><RhombusItem /> <b> grin-wallet: </b>Command line (Rust), backend for Niffler and Ironbelly wallet.
                        <p className="pl-8">
                            <a href="https://github.com/mimblewimble/grin-wallet" className="text-primary"> https://github.com/mimblewimble/grin-wallet </a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>GRIM GUI wallet:</b>
                        <p className="pl-8">
                            <a href="https://getgrin.github.io/" className="text-primary">https://getgrin.github.io/</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b> Grin++: </b>  Wallet (written in C++), supports desktop and mobile.
                        <p className="pl-8">
                            <a href="https://grinplusplus.github.io/" className="text-primary">https://grinplusplus.github.io/</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Ironbelly: </b> Mobile Grin wallet (Android and iOS), runs a lite node optionally connects to your own node for extra privacy.
                        <p className="pl-8">
                            <a href=" " className="text-primary">https://github.com/i1skn/ironbelly</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b> Niffler GUI wallet:  </b> Rust grin-wallet (rust) as backend.
                        <p className="pl-8">
                            <a href=" " className="text-primary"> https://github.com/grinfans/niffler </a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b> Easy Grin webwallet:  </b> Easy to use online webwallet. Remember, not you keys, not your coins. We advice to only use this as an intermediate wallet, e.g. to recieve mining reward. Only use with small amounts.
                        <p className="pl-8">
                            <a href="https://wallet.easygrin.org/" className="text-primary"> https://wallet.easygrin.org/ </a>
                        </p>
                    </li>
                </ul>
            </div>

            {/*Shops, Market, Pay with grin*/}
            <div className="py-4">
                <h2 className="header-2">Shops, Market, Pay with grin</h2>
                <ul className="pl-4 pt-2 space-y-4" >
                    <li><RhombusItem /> <b> Grin++ shop: </b>
                        <p className="pl-8">
                            <a href="https://shop.grinplusplus.com/" className="text-primary">https://shop.grinplusplus.com/</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Slatepack market place: </b>Buy and sell with Grin, have fun.
                        <p className="pl-8">
                            <a href="https://slatepacks.com/" className="text-primary">https://slatepacks.com/</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grinily:</b> Apparel, mugs, Grin goodies - pay with ツ
                        <p className="pl-8">
                            <a href="https://grinily.com/" className="text-primary">https://grinily.com/</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grinbux:</b> Web traffic exchange, get free ツ by viewing ads
                        <p className="pl-8">
                            <a href="https://grinbux.com/" className="text-primary">https://grinbux.com/</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>OnlyGrins:</b> Win ツ lottery
                        <p className="pl-8">
                            <a href="https://onlygrins.com/" className="text-primary">https://onlygrins.com/</a>
                        </p>
                    </li>
                </ul>
            </div>

            {/*Grin Block Explorers*/}
            <div className="py-4">
                <h2 className="header-2">Grin Block Explorers</h2>
                <ul className="pl-4 pt-2 space-y-4" >
                    <li><RhombusItem /> <b> Grin Explorer: </b>
                        <p className="pl-8">
                            <a href="https://github.com/mimblewimble/grin-explorer" className="text-primary">https://github.com/mimblewimble/grin-explorer</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grin Explorer Token view: </b>
                        <p className="pl-8">
                            <a href="https://grin.tokenview.com/en" className="text-primary">https://grin.tokenview.com/en</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grin scan money: </b>
                        <p className="pl-8">
                            <a href="https://scan.grin.money/chart/block" className="text-primary">https://scan.grin.money/chart/block</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grincoin Explorer:</b>
                        <p className="pl-8">
                            <a href="https://grincoin.org/" className="text-primary">https://grincoin.org/</a>
                            <span className="text-sm text-gray-600 ml-2">
                                [<a href="https://github.com/aglkm/grin-explorer" className="text-primary">github</a>]
                            </span>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grin block explorer2:</b>
                        <p className="pl-8">
                            <a href="http://107.175.127.117/mainnet/blocks" className="text-primary">http://107.175.127.117/mainnet/blocks</a>
                        </p>
                    </li>
                </ul>
            </div>

            {/*Community channels and social media*/}
            <div className="py-4">
                <h2 className="header-2">Social Media and Community channels</h2>

                <ul className="pl-4 pt-2 space-y-4" >
                    <li><RhombusItem />  <b>KeyBase:</b> Grincoin on keybase is the best place for technical discussions and to join general meetings.
                        <p className="pl-8">
                            <a href="https://keybase.io/team/grincoin" className="text-primary">https://keybase.io/team/grincoin</a>                            
                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin Forum: </b> Discuss everything Grin, meme contests, Research, mining, market, you name it!
                        <p className="pl-8">
                            <a href="https://forum.grin.mw/" className="text-primary">https://forum.grin.mw/</a>
                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin Telegram community:</b> Buzzing with discussions memes, and anything else Grin related.
                        <p className="pl-8">
                            <a href="https://t.me/grinprivacy" className="text-primary">https://t.me/grinprivacy</a>
                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin++ Telegram group:</b> Any problems or questions with regard to Grin++ wallet, ask here.
                        <p className="pl-8">
                            <a href="https://t.me/GrinPP" className="text-primary">https://t.me/GrinPP</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>GRIM WALLET Telegram group:</b>
                        <p className="pl-8">
                            <a href="https://t.me/grim_app" className="text-primary">https://t.me/grim_app</a>
                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin Ironbelly Telegram group:</b> Any problems or questions with regard to Ironbelly wallet, ask here.
                        <p className="pl-8">
                            <a href="https://t.me/ironbelly" className="text-primary">https://t.me/ironbelly</a>
                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grinventions Telegram channel:</b> Innovative inventions for the grin cryptocurrency. Also discusses building the Mimblewimble Python implementatoin and quantum computing basic in Python
                        <p className="pl-8">
                            <a href="https://t.me/grinventions" className="text-primary">https://t.me/grinventions</a>

                        </p>
                    </li>

                    <li><RhombusItem />  <b>Grin Twitter:</b> Activities suspender bla bla. When they try to silence you ... you know you are on the right path!
                        <p className="pl-8">
                            <a href="https://twitter.com/grinMW" className="text-primary">https://twitter.com/grinMW</a>
                        </p>
                    </li>
                    <li><RhombusItem /><b>MW Fediverere:</b>The Decentralised social network for Grinners
                        <p className="pl-8">
                            <a href="https://mw.social/timeline/local" className="text-primary">https://mw.social/timeline/local</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin Reddit</b> Not that active, for more busy channels, check Telegram, Keybase and the forum.
                        <p className="pl-8">
                            <a href="https://www.reddit.com/r/GRIN/" className="text-primary">https://www.reddit.com/r/GRIN/</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin Reddit (grincoin)</b> Another reddit channel which is gaining traction.
                        <p className="pl-8">
                            <a href="https://www.reddit.com/r/grincoin/" className="text-primary">https://www.reddit.com/r/grincoin/</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin Discord community</b> Meet other grin followers on discord.
                        <p className="pl-8">
                            <a href="https://discord.gg/5p4vCQY9km" className="text-primary">https://discord.gg/5p4vCQY9km</a>
                        </p>
                    </li>
                    <li><RhombusItem /><b>Grin Community Channel</b>Cekickafa's youtube channel for Grin info, tutorials...
                        <p className="pl-8">
                            <a href="https://www.youtube.com/channel/UCdTLEB6xPSuJqye6NXbs1HQ/videos" className="text-primary">https://www.youtube.com/channel/UCdTLEB6xPSuJqye6NXbs1HQ/videos</a>
                        </p>
                    </li>                   
                    <li><RhombusItem /> <b>Gitter:</b>
                        <p className="pl-8">
                            <a href="https://gitter.im/grin_community/Lobby" className="text-primary">https://gitter.im/grin_community/Lobby</a>
                        </p>
                    </li>
                </ul>

            </div>

            {/*Grin tools and scripts repositories*/}
            <div className="py-4">
                <h2 className="header-2">Grin tools and scripts repositories</h2>
                <ul className="pl-4 pt-2 space-y-4" >
                    <li><RhombusItem />  <b>GrinVention:</b> Pure Python implementation of Mimblewimble protocol for Grin cryptocurrency.
                        <p className="pl-8">
                            <a href="https://github.com/grinventions/" className="text-primary">https://github.com/grinventions/</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grin Mail:</b> Automatically send and receive transactions via email (last commit 05-07-2021).
                        <p className="pl-8">
                            <a href="https://github.com/aixinrock/grinmail/blob/main/README-en.md" className="text-primary">https://github.com/aixinrock/grinmail/blob/main/README-en.md</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Testnet exchange: </b> An example implementation for testnet exchange that consists of 2 pieces 1) the Grin Wallet APIs for Grin community wallet developers via a JSON-RPC interface 2) a reference command-line wallet, which provides a baseline wallet for Grin and demonstrates how the wallet APIs should be called.
                        <p className="pl-8">
                            <a href="https://github.com/pkariz/grin-wallet/tree/fix/invoice-issues" className="text-primary">https://github.com/pkariz/grin-wallet/tree/fix/invoice-issues </a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b> Vault713 - Grinbox: </b> (last commit 2019) - Grinbox provides a simple way for parties to exchange transaction slates, 3rd party as transaction buffer/intermediate.
                        <p className="pl-8">
                            <a href="https://github.com/vault713/grinbox" className="text-primary"> https://github.com/vault713/grinbox </a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b> GrinGots wizarding bank: </b> (last commits in 2019), Gringotts is a CLI app that you can use to send and receive grins instantly using one of the available backends for communication.
                        <p className="pl-8">
                            <a href="https://github.com/mcdallas/gringotts" className="text-primary"> https://github.com/mcdallas/gringotts </a>
                            <a href="https://github.com/mcdallas/gringotts-rust" className="text-primary"> https://github.com/mcdallas/gringotts-rust </a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>AwesomeGrin:</b> A curated list of Grin services, softwares and tools
                        <p className="pl-8">
                            <a href="https://github.com/quentinlesceller/awesome-grin" className="text-primary">https://github.com/quentinlesceller/awesome-grin</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin-recovery:</b> A Python based Grin wallet recovery script
                        <p className="pl-8">
                            <a href="https://github.com/Anynomouss/grin_recovery" className="text-primary">https://github.com/Anynomouss/grin_recovery</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin vanity address generator:</b> Slatepack vanity address generator
                        <p className="pl-8">
                            <a href="https://github.com/MakisChristou/grin-vanity" className="text-primary">https://github.com/MakisChristou/grin-vanity</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grin Bot:</b> Grin bot written in Rust for Telegram and Keybase
                        <p className="pl-8">
                            <a href="https://github.com/alexbyrnes/grinbot" className="text-primary">https://github.com/alexbyrnes/grinbot</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grin payment calculation, node mapping & more:</b>
                        <p className="pl-8">
                            <a href="https://github.com/grincc/hub/tree/main/scripts" className="text-primary">https://github.com/grincc/hub/tree/main/scripts</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grin-recovery:</b> Python based wallet recovery script (40,000 passwords/second)
                        <p className="pl-8">
                            <a href="https://github.com/Anynomouss/grin_recovery" className="text-primary">https://github.com/Anynomouss/grin_recovery</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Testnet Faucet:</b>
                        <p className="pl-8">
                            <a href="https://github.com/quentinlesceller/awesome-grin#faucet" className="text-primary">https://github.com/quentinlesceller/awesome-grin#faucet</a>
                        </p>
                    </li>
                </ul>

                {/*Grin Developers*/}
                <div className="py-4">
                    <h2 className="header-2">Grin Developers</h2>
                    <p><b>Your journey down the rabit hole starts here</b></p>
                    <ul className="pl-4 pt-2 space-y-4" >
                        <li><RhombusItem />  <b>Grin main github page:</b>
                            <p className="pl-8">
                                <a href="hhttps://github.com/mimblewimble/grin" className="text-primary">https://github.com/mimblewimble/grin</a>
                            </p>
                        </li>
                        <li><RhombusItem /> <b>Help debug and improve node and wallet:</b>
                            <p className="pl-8">
                                <a href="https://github.com/mimblewimble/grin/blob/master/doc/build.md" className="text-primary">https://github.com/mimblewimble/grin/blob/master/doc/build.md</a>
                            </p>
                        </li>
                        <li><RhombusItem /> <b>Python wrappers for the Grin node and wallet API: </b>
                            <p className="pl-8">
                                <a href="https://github.com/grinfans/grinmw.py" className="text-primary">https://github.com/grinfans/grinmw.py</a>
                            </p>
                        </li>
                        <li><RhombusItem /> <b> Grin++ technical design, wiki and API documentation: </b>
                            <p className="pl-8">
                                <a href="https://github.com/GrinPlusPlus/GrinPlusPlus/wiki/Technical-Design" className="text-primary"> https://github.com/GrinPlusPlus/GrinPlusPlus/wiki/Technical-Design </a>
                            </p>
                        </li>
                        <li><RhombusItem /> <b>Grinnode.live: </b>high-available GRIN-API & Sync-Service (very convenient if you are a developer).
                            <p className="pl-8">
                                <a href="https://grinnode.live/" className="text-primary">https://grinnode.live/</a>
                            </p>
                        </li>
                        <li><RhombusItem /><b>Grin documentation: </b>Learn about the origin of Grin, Mimble Wimble, Pederson commitments, Eliptic Curve cryptography as well as practical tutorials on how to install and use the grin node software and grin-wallet.
                            <p className="pl-8">
                                <a href="https://docs.grin.mw/" className="text-primary">https://docs.grin.mw/</a>
                            </p>
                        </li>
                        <li><RhombusItem /><b>Ask if you need something more: </b>Is there anything else you need as aspiring Grin developer? Please ask, so we can tailer the Developer content to your needs. Just reachout to Anynomous on KeyBase.
                            <p className="pl-8">
                                <a href="https://keybase.io/team/grincoin" className="text-primary">https://keybase.io/team/grincoin</a>
                            </p>
                        </li>
                        <li><RhombusItem /> <b>Introduction to Grin:</b>
                            <p className="pl-8">
                                <a href="https://github.com/mimblewimble/grin/blob/master/doc/intro.md" className="text-primary">https://github.com/mimblewimble/grin/blob/master/doc/intro.md</a>
                            </p>
                        </li>
                        <li><RhombusItem /> <b>Cuck(at)oo Cycle:</b>
                            <p className="pl-8">
                                <a href="https://github.com/tromp/cuckoo" className="text-primary">https://github.com/tromp/cuckoo</a>
                            </p>
                        </li>
                        <li><RhombusItem /> <b>Why Grin:</b>
                            <p className="pl-8">
                                <a href="https://gist.github.com/phyro/ec37d8bfedd36102b0ea5824580d06e4" className="text-primary">https://gist.github.com/phyro/ec37d8bfedd36102b0ea5824580d06e4</a>
                            </p>
                        </li>
                        <li><RhombusItem /> <b>Interactive transactions:</b>
                            <p className="pl-8">
                                <a href="https://phyro.github.io/what-is-grin/interactive_txs.html" className="text-primary">https://phyro.github.io/what-is-grin/interactive_txs.html</a>
                            </p>
                        </li>
                        <li><RhombusItem /> <b>Grin's emission schedule:</b>
                            <p className="pl-8">
                                <a href="https://phyro.github.io/what-is-grin/grin_emission.html" className="text-primary">https://phyro.github.io/what-is-grin/grin_emission.html</a>
                            </p>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Mining Software section */}
            <div className="py-4">
                <h2 className="header-2">Mining Software</h2>
                <ul className="pl-4 pt-2 space-y-4">
                    <li><RhombusItem /> <b>Linux miner:</b>
                        <p className="pl-8">
                            <a href="https://github.com/mimblewimble/grin-miner" className="text-primary">https://github.com/mimblewimble/grin-miner</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Windows miner:</b>
                        <p className="pl-8">
                            <a href="https://github.com/mozkomor/GrinGoldMiner" className="text-primary">https://github.com/mozkomor/GrinGoldMiner</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Mining pool:</b>
                        <p className="pl-8">
                            <a href="http://mwgrinpool.com/" className="text-primary">http://mwgrinpool.com/</a>
                        </p>
                    </li>
                </ul>
            </div>


            {/* Additional Resources section */}
            <div className="py-4">
                <h2 className="header-2">Additional Resources</h2>
                <ul className="pl-4 pt-2 space-y-4">
                    <li><RhombusItem /> <b>Blockchain explorer:</b>
                        <p className="pl-8">
                            <a href="https://grinscan.net/" className="text-primary">https://grinscan.net/</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Mining Guides:</b>
                        <p className="pl-8">
                            <a href="https://www.coingecko.com/buzz/how-to-mine-grin" className="text-primary">How to mine Grin with GGM</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Wallet Guides:</b>
                        <p className="pl-8">
                            <a href="https://github.com/vault713/wallet713/blob/master/docs/usage.md" className="text-primary">Grin wallet713 user guide</a>
                        </p>
                        <p className="pl-8">
                            <a href="https://walletlist.keybase.pub/" className="text-primary">Wallet recommendations for newcomers</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>FAQ:</b>
                        <p className="pl-8">
                            <a href="https://www.coingecko.com/buzz/grin-frequently-asked-questions" className="text-primary">Grincoin FAQ by CoinGecko</a>
                        </p>
                    </li>
                </ul>
            </div>

            {/*Other link outs*/}
            <div className="py-4">
                <h2 className="header-2">Other link outs</h2>
                <ul className="pl-4 pt-2 space-y-4" >

                    <li><RhombusItem />  <b> Grinflation:</b> A great website that shows all the economics around Grins's Fair 1   ツ per second supply rate, its inflation, total supply, market cap and price now and in times to come.
                        <p className="pl-8">

                            <a href="https://grinflation.com/" className="text-primary">https://grinflation.com/</a>
                        </p>
                    </li>

                    <li><RhombusItem />  <b>A Different approach to Grin's inflation supply: </b> A nice article showing a different view on Grin's supply, inflation and inherent fairness.
                            <p className="pl-8">
                            <a href="https://madenuzmani.medium.com/a-different-approach-to-grins-inflation-and-supply-355266fc96be" className="text-primary">https://madenuzmani.medium.com/a-different-approach-to-grins-inflation-and-supply-355266fc96be</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin art by grinsingularity: </b>
                        <p className="pl-8">
                            <a href="https://github.com/grinsingularity/GrinArt" className="text-primary">https://github.com/grinsingularity/GrinArt</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin link to old mailing list: </b>
                        <p className="pl-8">
                            <a href="https://lists.launchpad.net/mimblewimble/" className="text-primary">https://lists.launchpad.net/mimblewimble/</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin Papyrus: </b> Collection of important documents and links related to the development of GRIN. Find back everything, the early steps towards Grin in 2016, launch in 2019 and everything that happened after
                        <p className="pl-8">
                            <a href="https://github.com/Grinnode-live/GRIN-papyrus" className="text-primary">https://github.com/Grinnode-live/GRIN-papyrus</a>
                        </p>
                    </li>

                    <li><RhombusItem />  <b>CryptoProfG: </b> A series of articles shedding light to how grin works.
                        <ul className="pl-8">
                            <li><a href="https://medium.com/@CryptoProfG/grin-money-explained-1-greater-than-bitcoin-myths-around-mimblewimble-and-grin-unlocked-adcc166ae864" className="text-primary">https://medium.com/@CryptoProfG/grin-money-explained-1-greater-than-bitcoin-myths-around-mimblewimble-and-grin-unlocked-adcc166ae864</a></li>
                            <li><a href="https://medium.com/@CryptoProfG/grin-money-explained-2-money-origins-purpose-and-inflation-4b7c1213ee" className="text-primary">https://medium.com/@CryptoProfG/grin-money-explained-2-money-origins-purpose-and-inflation-4b7c1213ee</a></li>
                            <li><a href="https://medium.com/@CryptoProfG/grin-money-explained-3-supply-and-monetary-properties-of-grin-aa753fdb91b8" className="text-primary">https://medium.com/@CryptoProfG/grin-money-explained-3-supply-and-monetary-properties-of-grin-aa753fdb91b8</a></li>
                            <li><a href="https://medium.com/@CryptoProfG/grin-money-explained-4-exploring-grins-monetary-model-e48b1761653" className="text-primary">https://medium.com/@CryptoProfG/grin-money-explained-4-exploring-grins-monetary-model-e48b1761653</a></li>
                        </ul>
                    </li>
                    <li><RhombusItem />  <b>Interview with Ignotus Peverell (Internet Archive): </b>
                        <p className="pl-8">
                            <a href="https://web.archive.org/web/20210304063138/https://breakermag.com/grin-founder-ignotus-peverell-on-life-after-launch-and-the-path-forward/" className="text-primary">https://web.archive.org/web/20210304063138/https://breakermag.com/grin-founder-ignotus-peverell-on-life-after-launch-and-the-path-forward/</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>What is Grin?</b> Explanation on emission, transaction aggretation and Mimblewimble with some nice visuals usefull for presentations, by Phyro.
                        <p className="pl-8">
                            <a href="https://github.com/phyro/what-is-grin" className="text-primary">https://github.com/phyro/what-is-grin</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin newsletter:</b>  Sign up or click on 'Read first' to read old Grin newsletters.
                        <p className="pl-8">
                            <a href="https://grinpost.substack.com/" className="text-primary">https://grinpost.substack.com/</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin Post:</b>  Another channel to follow grin development news.
                        <p className="pl-8">
                            <a href="https://grinpost.substack.com/" className="text-primary">https://grinpost.substack.com/</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin Post Medium:</b>  Medium articles about Grin.
                        <p className="pl-8">
                            <a href="https://grinpost.medium.com/" className="text-primary">https://grinpost.medium.com/</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Some Grin art by Grincy:</b>
                        <p className="pl-8">
                            <a href="https://github.com/TomMualler/Grinchy-Grin" className="text-primary">https://github.com/TomMualler/Grinchy-Grin</a>
                        </p>
                    </li>
                    <li><RhombusItem />  <b>Grin official newsletter:</b>
                        <p className="pl-8">
                            <a href="https://grinnews.substack.com/" className="text-primary">https://grinnews.substack.com/</a>
                        </p>
                    </li>

                </ul>

            </div>

            {/* Documentation */}
            <div className="py-4">
                <h2 className="header-2">Documentation</h2>
                <ul className="pl-4 pt-2 space-y-4">
                    <li><RhombusItem /> <b>Documentation page:</b>
                        <p className="pl-8">
                            <a href="https://docs.grin.mw/" className="text-primary">https://docs.grin.mw/</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Wallet List:</b>
                        <p className="pl-8">
                            <a href="https://github.com/mimblewimble/docs/wiki/Community-projects#wallets" className="text-primary">https://github.com/mimblewimble/docs/wiki/Community-projects#wallets</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grin 'original' wallet user guide:</b>
                        <p className="pl-8">
                            <a href="https://github.com/mimblewimble/docs/wiki/Wallet-User-Guide" className="text-primary">https://github.com/mimblewimble/docs/wiki/Wallet-User-Guide</a>
                        </p>
                    </li>
                </ul>
            </div>


            {/*External articles*/}
            <div className="py-4">
                <h2 className="header-2">External articles</h2>

                <ul className="pl-4 pt-2 space-y-4" >
                    <li><RhombusItem />  <b>Articles on Grin and Mimblewimble: </b> Just a few of the many, feel free to add more.
                        <p className="pl-8">
                            <a href="https://www.blockchainbeach.com/going-deep-on-privacy-mimblewimble/" className="text-primary">https://www.blockchainbeach.com/going-deep-on-privacy-mimblewimble/</a>
                        </p>
                        <p className="pl-8">
                            <a href="https://smithandcrown.com/research/grin-mimblewimble/" className="text-primary">https://smithandcrown.com/research/grin-mimblewimble/</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grin Papyrus Collection:</b> Important documents and links from early development in 2016 to present
                        <p className="pl-8">
                            <a href="https://github.com/Grinnode-live/GRIN-papyrus" className="text-primary">https://github.com/Grinnode-live/GRIN-papyrus</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Old Mailing List Archive:</b>
                        <p className="pl-8">
                            <a href="https://lists.launchpad.net/mimblewimble/" className="text-primary">https://lists.launchpad.net/mimblewimble/</a>
                        </p>
                    </li>

                </ul>

            </div>

            <div className="py-4">
                <h2 className="header-2">Articles and Research</h2>
                <ul className="pl-4 pt-2 space-y-4">
                    <li><RhombusItem /> <b>What is Grin:</b>
                        <p className="pl-8">
                            <a href="https://phyro.github.io/what-is-grin/mimblewimble.html" className="text-primary">https://phyro.github.io/what-is-grin/mimblewimble.html</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>BitcoinTalk Ann:</b>
                        <p className="pl-8">
                            <a href="https://bitcointalk.org/index.php?topic=5090427.0" className="text-primary">https://bitcointalk.org/index.php?topic=5090427.0</a>
                        </p>
                    </li>
                    <li><RhombusItem /> <b>Grin Hub, links, exchanges, tools:</b>
                        <p className="pl-8">
                            <a href="https://github.com/grincc/hub" className="text-primary">https://github.com/grincc/hub</a>
                        </p>
                    </li>
                </ul>
            </div>
            
            {/*Mining Pools*/}
            <div className="py-4">
                <h2 className="header-2">Mining Pools</h2>
                <ul className="pl-4 pt-2 space-y-4">
                    <li><RhombusItem /> <b>How to mine with G1 Mini:</b>
                        <p className="pl-8">
                            <a href="https://forum.grin.mw/t/how-to-mine-grin-with-g1-mini-steps/9796" className="text-primary">https://forum.grin.mw/t/how-to-mine-grin-with-g1-mini-steps/9796</a>
                        </p>
                    </li>
                    <li><RhombusItem /><a href="https://pool.always.vip/" className="text-primary pl-2">Always.vip</a></li>
                    <li><RhombusItem /><a href="https://grin.2miners.com/" className="text-primary pl-2">2Miners</a></li>
                    <li><RhombusItem /><a href="https://gaeapool.com/#/" className="text-primary pl-2">gaeapool</a></li>
                    <li><RhombusItem /><a href="https://grinmint.com/" className="text-primary pl-2">Grinmint</a></li>
                    <li><RhombusItem /><a href="https://solo-grin.2miners.com/" className="text-primary pl-2">2Miners SOLO</a></li>
                    <li><RhombusItem /><a href="https://pool.easygrin.org/" className="text-primary pl-2">EasyGrin</a></li>
                    <li><RhombusItem /><a href="https://solo.easygrin.org/" className="text-primary pl-2">Easy Grin SOLO</a></li>
                    <li><RhombusItem /> <b>SOLO Mining Private Pool Guide:</b>
                        <p className="pl-8">
                            <a href="https://forum.grin.mw/t/solo-mining-private-pool-guide/10462" className="text-primary">https://forum.grin.mw/t/solo-mining-private-pool-guide/10462</a>
                        </p>
                    </li>

                </ul>
            </div>

            {/*Asic Hardware Firms*/}
            <div className="py-4">
                <h2 className="header-2">Asic Hardware Firms</h2>
                <ul className="pl-4 pt-2 space-y-4">
                    <li><RhombusItem /><a href="http://ipollo.com/" className="text-primary pl-2">ipollo</a></li>
                    <li><RhombusItem /><a href="https://www.nhash.net/" className="text-primary pl-2">NHASH</a></li>
                    <li><RhombusItem /><a href="https://www.powpower.net/product/ipollo-g1-mini/" className="text-primary pl-2">Powpower</a></li>
                    <li><RhombusItem /><a href="https://www.newegg.com/p/0X6-09A3-00001" className="text-primary pl-2">Newegg</a></li>
                </ul>
            </div>

          {/*Exchanges*/}
            <div className="py-4">
                <h2 className="header-2">Exchanges</h2>
                <ul className="pl-4 pt-2 space-y-4">
                    <li><RhombusItem /><a href="https://tradeogre.com/exchange/BTC-GRIN" className="text-primary pl-2">Tradeogre</a>
                        <ul className="pl-12 list-disc">
                            <li>No KYC</li>
                            <li>Slatepack Method</li>
                            <li>Deposit-Withdrawal is supported.</li>
                        </ul>
                    </li>
                    <li><RhombusItem /><a href="https://www.gateio.pro/trade/GRIN_USDT" className="text-primary pl-2">Gateio</a>
                        <ul className="pl-12 list-disc">
                            <li>KYC</li>
                            <li>Deposit/Withdraw (using Memo code)</li>
                            <li>TOR Method</li>
                            <li>Not available for EU Citizens</li>
                        </ul>
                    </li>
                    <li><RhombusItem /><a href="https://www.coinw.com/frontSpot/spottrade?symbol=702" className="text-primary pl-2">CoinW</a>
                        <ul className="pl-12 list-disc">
                            <li>KYC</li>
                            <li>Deposit/Withdrawal (using Memo code)</li>
                            <li>TOR Method</li>
                        </ul>
                    </li>
                    <li><RhombusItem /><a href="https://bisq.network/" className="text-primary pl-2">Bisq</a>
                        <ul className="pl-12 list-disc">
                            <li>No KYC</li>
                            <li>Completely decentralized and community governed</li>
                            <li>BTC-Grin trading-pair</li>
                            <li>BTC collateral equivalent to asking price when selling Grin</li>
                        </ul>
                    </li>
                    <li><RhombusItem /><a href="https://100x.app/" className="text-primary pl-2">100x APP</a>
                        <ul className="pl-12 list-disc">
                            <li>No KYC, peer to peer. While in beta requires whitelisting on Discord</li>
                            <li>Escrow, Stable coin intermediate</li>
                            <li>In beta, use at own Risk</li>
                            <li>Buy using Paypal, Venmo zelle</li>
                            <li>Actively promotes using Grin as cash</li>
                        </ul>
                    </li>
                </ul>
                <p className="italic mt-4">*Grin++, Ironbelly wallets don't support https tx method.</p>
                <p className="italic">*** Check wallets if listening via <a href="https://grinnode.live/tools/wallet-checker" className="text-primary">Grin.nodelivecheck</a> or <a href="https://grinchck.uber.space/" className="text-primary">GrinAdresscheck</a></p>
                <p className="italic mt-2">Disclaimer: Exchange and pool infos are taken from Grin users & community feedback, <strong>not an endorsement.</strong> Always do your research.</p>
            </div>
        </div>
    )
}
