import { createDirectus, rest, readItem, readItems } from '@directus/sdk';

const directus = createDirectus('http://directus-t.itcast.cn/').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems },
	};
});