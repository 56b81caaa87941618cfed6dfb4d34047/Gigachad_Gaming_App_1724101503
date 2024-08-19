/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1724101506", {
    template: `
    <section id="cta-component" style="min-height: 590px"  class="bg-gradient-to-br from-purple-400 to-pink-500 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 rounded-xl shadow-2xl p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex mb-6">
                    <h2 id="cta-title" class="flex-1 text-4xl font-extrabold leading-tight tracking-tight text-white">Scotty's GigaChad Gaming Universe</h2>
                </div>

                <div id="cta-subtitle-container" class="flex mb-8">
                    <p id="cta-subtitle" class="flex-1 text-lg font-medium text-pink-100">Embark on an epic journey through neon-lit cyberpunk cities and battle mutant dinosaurs with bitcoin scales!</p>
                </div>
                
                <div id="cta-features" class="grid grid-cols-2 gap-6 mb-8">
                    <div class="bg-white bg-opacity-10 rounded-lg p-4 shadow-lg">
                        <i class='bx bx-joystick text-3xl text-pink-300 mb-2'></i>
                        <h3 class="text-xl font-bold text-white mb-2">Intense Gameplay</h3>
                        <p class="text-pink-100">Experience heart-pounding action with our revolutionary AI-powered NPCs</p>
                    </div>
                    <div class="bg-white bg-opacity-10 rounded-lg p-4 shadow-lg">
                        <i class='bx bx-coin-stack text-3xl text-pink-300 mb-2'></i>
                        <h3 class="text-xl font-bold text-white mb-2">Crypto Rewards</h3>
                        <p class="text-pink-100">Earn GigaChad Coins for every quest completed and boss defeated</p>
                    </div>
                </div>

                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-900 bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-lg px-8 py-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Join the GigaChad Gaming Revolution</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
