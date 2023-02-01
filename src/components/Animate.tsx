import { useFrame } from "@react-three/fiber";

type AnimatePropsType = {
	controls: any;
	lerping: any;
	to: any;
	target: any;
};

function Animate({ controls, lerping, to, target }: AnimatePropsType) {
	useFrame(({ camera }, delta) => {
		if (lerping) {
			camera.position.lerp(to, delta * 2);
			controls.current.target.lerp(target, delta * 2);
		}
	});
}

export default Animate;
