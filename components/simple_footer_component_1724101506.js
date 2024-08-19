Vue.component("simple_footer_component_1724101506", {
    template: `
    <div id="footer-section" style="min-height: 590px"  class="flex-1 bg-gradient-to-br from-pink-200 to-pink-400 p-6">
        <div id="footer-container" class="max-w-md mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-8 border border-pink-300">
            <h2 class="text-3xl font-bold text-center mb-6 text-pink-800">Swap for ScottyCoin</h2>
            <p class="text-pink-700 mb-4 text-center">Join Scotty's Gigachad Game and become the ultimate crypto dinosaur!</p>
            <div class="mb-6 bg-white bg-opacity-30 rounded-lg p-4 shadow-inner">
                <label class="block text-sm font-medium text-pink-800 mb-2">From</label>
                <div class="flex items-center bg-white bg-opacity-50 rounded-lg p-2">
                    <select v-model="fromToken" class="flex-grow bg-transparent focus:outline-none text-pink-800">
                        <option value="eth">ETH</option>
                        <option value="usdc">USDC</option>
                        <option value="dai">DAI</option>
                    </select>
                    <input v-model="fromAmount" type="number" placeholder="0.0" class="w-1/2 text-right bg-transparent focus:outline-none text-pink-800">
                </div>
            </div>
            <div class="flex justify-center my-4">
                <i class='bx bx-transfer-alt text-3xl text-pink-600'></i>
            </div>
            <div class="mb-6 bg-white bg-opacity-30 rounded-lg p-4 shadow-inner">
                <label class="block text-sm font-medium text-pink-800 mb-2">To</label>
                <div class="flex items-center bg-white bg-opacity-50 rounded-lg p-2">
                    <div class="flex-grow text-pink-800">ScottyCoin</div>
                    <input v-model="toAmount" type="number" placeholder="0.0" class="w-1/2 text-right bg-transparent focus:outline-none text-pink-800" readonly>
                </div>
            </div>
            <button @click="swap" class="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md">Swap and Join the Game!</button>
            <p class="mt-4 text-pink-700 text-center">Unleash your inner Gigachad with ScottyCoin and dominate the crypto jungle!</p>
        </div>
    </div>
    `,
    data() {
        return {
            fromToken: 'eth',
            fromAmount: '',
            toAmount: ''
        };
    },
    watch: {
        fromAmount(newVal) {
            // Simple 1:1 conversion for demonstration
            this.toAmount = newVal;
        }
    },
    methods: {
        // Start of swap method
        swap() {
            alert(`Swapping ${this.fromAmount} ${this.fromToken.toUpperCase()} for ${this.toAmount} ScottyCoin`);
            // Implement actual swap logic here
        }
        // End of swap method
    }
});
