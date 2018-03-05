/**
 * adds a class to a DOM element and removes it when the animation event fires
 * @param  {object} el        DOM reference
 * @param  {string} className the class name to add
 * @return {void}
 */
function oneShotClass (el, className) {
	el.classList.add(className)
	const animationEnd = () => {
		el.classList.remove(className)
	}
	el.addEventListener('animationend', animationEnd)
	el.addEventListener('webkitAnimationEnd', animationEnd)
}

export default {
	/**
	 * Vue plugin for one shot css animations
	 * @param  {object} Vue vue.js instance
	 * @return {void}
	 */
	install: Vue => {
		/**
		 * register v-shotclass custom directive
		 */
		Vue.directive('shotclass', {
			bind (el, binding) {
				let className = binding.expression
				className = className.replace(/(['"])/g, '')
				oneShotClass(el, className)
			}
		})

		/**
		 * helper functions for usage with this.$shotclass
		 */
		Vue.prototype.$shotclass = (className, target) => {
			if (target.target) {
				target = target.target
			}
			oneShotClass(target, className)
		}

		Vue.prototype.$shotclassStop = (className, target) => {
			if (target.target) {
				target = target.target
			}
			target.classList.remove(className)
		}
	}
}
