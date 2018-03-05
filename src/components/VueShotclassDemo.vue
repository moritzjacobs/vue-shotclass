<template>
	<div class="vue-shotclass-demo">
		<img class="logo" src="../assets/logo.png">
		<div class="example1">
			<h1 v-shotclass="'animation-class'">vue-shotclass</h1>
			<h2 @click="$shotclass('animation-class', $event)">Click me!</h2>
			<h3 ref="target">A custom vue-directive for one-off animation classes</h3>
			<div style="text-align:center">
				<button @click="doAnim">play</button>
				<button @click="cancel">cancel</button>
			</div>
		</div>

		<pre><code class="lang-markup">
&lt;!-- Animate immediately on mount --&gt;
&lt;h1 v-shotclass="'animation-class'">…&lt;/h1&gt;

&lt;!-- Animate on @click --&gt;
&lt;h2 @click="$shotclass('animation-class', $event)"&gt;…&lt;/h2&gt;

&lt;!-- target another element via it's `ref` and add the animation classes --&gt;
&lt;h3 ref="target">…&lt;/h3&gt;
&lt;div style="text-align:center"&gt;
	&lt;button @click="doAnim">play&lt;/button&gt;
	&lt;button @click="cancel">cancel&lt;/button&gt;
&lt;/div&gt;
		</code></pre>
		<pre>
			<code class="lang-javascript">

// targets another element via it's `ref` and adds the animation classes
{
	…
	methods:
		doAnim () {
			this.$shotclass('animation-class', this.$refs.target)
		},
		cancel () {
			console.log(this.$refs.target)
			this.$shotclassStop('animation-class', this.$refs.target)
		}
	}
	…
}
			</code>
		</pre>
	</div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-markup.js'

export default {
	name: 'VueShotclassDemo',
	data () {
		return {
			markup: ''
		}
	},
	methods: {
		doAnim () {
			this.$shotclass('animation-class', this.$refs.target)
		},
		cancel () {
			this.$shotclassStop('animation-class', this.$refs.target)
		}
	},
	mounted () {
		console.log()
		Prism.highlightAll()
	}
}
</script>

<style lang="scss">
html {
	background-color: #f9f9f9;
}

body {
	background-color: #fff;
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	color: #2c3e50;
	margin-top: 60px;
	max-width: 800px;
	padding: 4em 2em;
	margin: auto;
}

h1,
h2,
h3,
h4 {
	text-align: center;
	transition: color 500ms;
}

.animation-class {
	color: #41b883;
	animation: rotate 1s;
	@keyframes rotate {
		100% {
			transform: rotateX(3 * 360deg);
		}
	}
}

.logo {
	display: block;
	margin: auto;
	width: 200px;
	height: auto;
}

.example1 {
	margin: 2em 0 5em 0;
}
</style>
