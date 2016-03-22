var example = (function() {

	"use strict"

	var scene = new THREE.Scene(),
		renderer = new THREE.WebGLRenderer(),
		light = new THREE.AmbientLight(0xffffff),
		camera,
		manualGeometry

	function initScene () {
		renderer.setSize(window.innerWidth, window.innerHeight)
		document.getElementById("webgl-container").appendChild(renderer.domElement)

		scene.add(light)

		camera = new THREE.PerspectiveCamera(
			35,
			window.innerWidth / window.innerHeight,
			1,
			1000
			)

		camera.position.z = 5
		scene.add(camera)

		var material = new THREE.MeshBasicMaterial({
			vertexColors: THREE.VertexColors,
			side: THREE.DoubleSide
		})

		var triangleGeometry = new THREE.Geometry()
		triangleGeometry.vertices.push(new THREE.Vector3(0.0, 1.0, 0.0))
		triangleGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0))
		triangleGeometry.vertices.push(new THREE.Vector3(1.0, -1.0, 0.0))
		//Vector3 (x, y, z) places points around the (0.0, 0.0, 0.0) coordinate of screen.

		triangleGeometry.faces.push(new THREE.Face3(0, 1, 2))
		//Face3 applies faces to each verticies

		triangleGeometry.faces[0].vertexColors[0] = new THREE.Color(0x00FF00)
		//top vertex
		triangleGeometry.faces[0].vertexColors[1] = new THREE.Color(0x0000FF)
		//lower left vertex
		triangleGeometry.faces[0].vertexColors[2] = new THREE.Color(0x00FF00)
		//lower right vertex

		manualGeometry = new THREE.Mesh(triangleGeometry, material)

		scene.add(manualGeometry)
		render()
	}

	function render(){

		renderer.render(scene, camera)
		requestAnimationFrame(render)

	}

	window.onload = initScene

	return {
		scene: scene,
	}

}) ()

