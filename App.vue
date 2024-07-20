<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
/*每个页面公共css */
@import url("./styles/common.css");
.page {
	position: relative;
	width:100%;
	height:calc( 100vh - 50px);
	// #ifndef H5
		height:100vh;
	// #endif
	color:#3E454A;
	&::before{
		content:'';
		position: absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background: #FDFDFD;
		// background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #FDFDFD), 
		// 					radial-gradient(at 47% 33%, rgba(228,243,242,1) 0, transparent 68%), 
		// 					radial-gradient(at 82% 65%, rgba(246,230,219,1) 0, transparent 83%);
		background: linear-gradient(180deg, rgba(188,216,252,1) 0%, rgba(255,255,255,0.704000350140056) 60%, rgba(255,255,255,1) 100%);
		z-index: -1;
	}
}
</style>
