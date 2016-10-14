import { unregister } from './utils/maps';

export default (options) => ({
    data() {
        return {
            [options.errorBagName]: this.$validator.errorBag
        };
    },
    computed: {
        [options.fieldsBagName]: {
            get() {
                return this.$validator.fieldBag.fields;
            }
        }
    },
    ready() {
        this.$nextTick(() => { this.$emit('validatorReady'); });
    },
    destroyed() {
        unregister(this);
    }
});
