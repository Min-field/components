<template>
    <div class = "flip-container">
        <div class = "flipper">
            <div class = "front">
                <img src="../../../assert/gakki/2.jpg" alt="">
            </div>

            <div class = "back">
                <img src="../../../assert/gakki/3.jpg" alt="">
                <p>this is a test of the filpper</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'flipper'
    }
</script>

<style lang = "scss">
.flip-container {
	perspective: 1000;
	transform-style: preserve-3d;
}
	/*  UPDATED! flip the pane when hovered */
	.flip-container:hover .back {
		transform: rotateY(0deg);
	}
	.flip-container:hover .front {
	    transform: rotateY(180deg);
	}

.flip-container, .front, .back {
	width: 320px;
	height: 480px;
}

/* flip speed goes here */
.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;

	position: relative;
}

/* hide back of pane during swap */
.front, .back {
	backface-visibility: hidden;
	transition: 0.6s;
	transform-style: preserve-3d;

	position: absolute;
	top: 0;
	left: 0;
}

/*  UPDATED! front pane, placed above back */
.front {
	z-index: 2;
	transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
	transform: rotateY(-180deg);
}
</style>

