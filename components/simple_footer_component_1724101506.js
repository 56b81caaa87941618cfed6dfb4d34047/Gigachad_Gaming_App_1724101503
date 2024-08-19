Vue.component("simple_footer_component_1724101506", {
    template: `
    <div id="footer-section" style="min-height: 390px" class="flex-1 bg-white dark:bg-gray-800 p-6">
        <div id="footer-container" class="max-w-md mx-auto bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg p-6">
            <h2 class="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">Swap for ScottyCoin</h2>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">From</label>
                <div class="flex items-center bg-white dark:bg-gray-600 rounded-lg p-2">
                    <select v-model="fromToken" class="flex-grow bg-transparent focus:outline-none text-gray-800 dark:text-white">
                        <option value="eth">ETH</option>
                        <option value="usdc">USDC</option>
                        <option value="dai">DAI</option>
                    </select>
                    <input v-model="fromAmount" type="number" placeholder="0.0" class="w-1/2 text-right bg-transparent focus:outline-none text-gray-800 dark:text-white">
                </div>
            </div>
            <div class="flex justify-center my-2">
                <i class='bx bx-transfer-alt text-2xl text-gray-500'></i>
            </div>
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">To</label>
                <div class="flex items-center bg-white dark:bg-gray-600 rounded-lg p-2">
                    <div class="flex-grow text-gray-800 dark:text-white">ScottyCoin</div>
                    <input v-model="toAmount" type="number" placeholder="0.0" class="w-1/2 text-right bg-transparent focus:outline-none text-gray-800 dark:text-white" readonly>
                </div>
            </div>
            <button @click="swap" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Swap</button>
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
