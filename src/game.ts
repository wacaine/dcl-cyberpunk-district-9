import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../7cd4d0bc-54d4-4f64-8ab2-6f18f41f03a3/src/item"
import Script2 from "../5caa95dd-9d2f-42e1-b935-0da1a287864a/src/item"
import Script3 from "../1746d432-ba19-4b2e-819f-d16cf5a64236/src/item"
import Script4 from "../6ecf36b9-d21a-4767-b945-4b45cd53c537/src/item"
import Script5 from "../8d62d5a3-411c-43f8-a438-574ccf3d0fbe/src/item"
import Script6 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script7 from "../06c23898-6653-4343-b4d1-94bd343c8740/src/item"
import Script8 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"
import Script9 from "../8d0cc5fb-6ed7-4452-9524-91f0e88ba77a/src/item"
import Script10 from "../3cf05054-0a57-4b00-ba77-a3f21876494d/src/item"
import Script11 from "../4adfea35-fb5c-4f64-bb5e-c7ebfa350868/src/item"
import Script12 from "../a186416e-81f1-4d0a-b0cd-a4b0077d264d/src/item"
import Script13 from "../847450b9-fec3-4666-9db2-428ec9512d82/src/item"
import Script14 from "../5af1151e-9def-47ed-88f9-1f4e52caee28/src/item"
import Script15 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"
import Script16 from "../7abe1ec8-bd5c-4ffe-b318-f17a330296bf/src/item"
import Script17 from "../69604eaa-4cb2-4b15-a1c2-16f37d92f57d/src/item"
import Script18 from "../c4a799c1-9ef8-4787-914e-4f8c15357881/src/item"
import Script19 from "../83087d33-84d2-4135-af09-ab0fa357b59d/src/item"
import Script20 from "../1d45dc17-42d2-4d02-af19-f5528f395b13/src/item"
import Script21 from "../1ed28f7d-046b-428c-8ac5-fcbed8df275e/src/item"
import Script22 from "../ad67f3a9-fa15-4e06-aced-a2a7716ebf85/src/item"
import Script23 from "../267c8583-606f-4b5a-a00d-b5f7f993766e/src/item"
import Script24 from "../d6043ef0-5f53-4dd0-8956-d1819c4c5046/src/item"
import Script25 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script26 from "../18d6cc5f-e136-4e55-b1a9-14d451b7df54/src/item"
import Script27 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script28 from "../68986c60-c95c-41ab-adf0-d0e02f5b5440/src/item"
import Script29 from "../4c9fa249-97ec-4f32-8fb8-b96f69ba8892/src/item"
import Script30 from "../e915cdb6-03e6-43e2-81fb-58ad8603f68c/src/item"
import Script31 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script32 from "../0dc18897-c8fb-4673-8c39-5f7879a84379/src/item"
import Script33 from "../1f1dfb04-879e-422f-a8da-44852a421199/src/item"
import Script34 from "../4519a0b9-98ef-4034-ab93-88134d1458e8/src/item"
import Script35 from "../b8755ec2-a4a1-4b3d-be0a-db5a2185d3b7/src/item"
import Script36 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script37 from "../2b9d39a4-980f-489b-8e0b-46f72552ea47/src/item"
import Script38 from "../a116b006-c177-4e39-ab7c-a8c64761a621/src/item"
import Script39 from "../9845778b-d877-4c06-a32a-75131a4ca6c4/src/item"
import Script40 from "../6d694c78-6dd5-4a4d-acee-21dbf67dd464/src/item"
import Script41 from "../a56ac3e0-aef8-48b9-b55b-844b3fa77056/src/item"
import Script42 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script43 from "../a72de884-e275-490d-b1bb-7f7eaca4777f/src/item"
import Script44 from "../274df603-dd2b-4a32-b2a0-c4ad758cb037/src/item"

import ScriptArcade from "../arcade-games/src/item"
import ScriptBar from "../bar/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const shopEmissive = new Entity('shopEmissive')
engine.addEntity(shopEmissive)
shopEmissive.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(4.795778274536133, 0, 3.9558064937591553),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
shopEmissive.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/Shop_Emissive.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
shopEmissive.addComponentOrReplace(gltfShape)

const sushiBar = new Entity('sushiBar')
engine.addEntity(sushiBar)
sushiBar.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(4.5, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
sushiBar.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/Sushi_Bar.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
sushiBar.addComponentOrReplace(gltfShape2)

const factoryBuilding = new Entity('factoryBuilding')
engine.addEntity(factoryBuilding)
factoryBuilding.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(34.5, 0, 4.576564788818359),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000041723251343, 1, 2.4086148738861084)
})
factoryBuilding.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("models/Factory_Building_1.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
factoryBuilding.addComponentOrReplace(gltfShape3)

const grafittiWallShortF = new Entity('grafittiWallShortF')
engine.addEntity(grafittiWallShortF)
grafittiWallShortF.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(18.55466079711914, 0, 0.37072837352752686),
  rotation: new Quaternion(2.927801145920011e-15, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(1.5140390396118164, 1, 1.0000026226043701)
})
grafittiWallShortF.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("models/Grafitti_Wall_Short_F.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
grafittiWallShortF.addComponentOrReplace(gltfShape4)

const grafittiWallShortC = new Entity('grafittiWallShortC')
engine.addEntity(grafittiWallShortC)
grafittiWallShortC.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(18.657997131347656, 0, 5.552128791809082),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
grafittiWallShortC.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("models/Grafitti_Wall_Short_C.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
grafittiWallShortC.addComponentOrReplace(gltfShape5)

const grafittiWallH = new Entity('grafittiWallH')
engine.addEntity(grafittiWallH)
grafittiWallH.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(18.359081268310547, 0, 6.998147964477539),
  rotation: new Quaternion(2.9616250773280067e-15, -0.8723340630531311, 1.0399031680208282e-7, -0.48891040682792664),
  scale: new Vector3(1.2238035202026367, 1, 1.114612102508545)
})
grafittiWallH.addComponentOrReplace(transform7)
const gltfShape6 = new GLTFShape("models/Grafitti_Wall_H.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
grafittiWallH.addComponentOrReplace(gltfShape6)

const grafittiWallJ = new Entity('grafittiWallJ')
engine.addEntity(grafittiWallJ)
grafittiWallJ.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(9.63679313659668, 4, 32.700958251953125),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.0000019073486328, 1)
})
grafittiWallJ.addComponentOrReplace(transform8)
const gltfShape7 = new GLTFShape("models/Grafitti_Wall_J.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
grafittiWallJ.addComponentOrReplace(gltfShape7)

const grafittiWallI = new Entity('grafittiWallI')
engine.addEntity(grafittiWallI)
grafittiWallI.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(0.10189065337181091, 0, 22.08835220336914),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1.5, 0.121091328561306)
})
grafittiWallI.addComponentOrReplace(transform9)
const gltfShape8 = new GLTFShape("models/Grafitti_Wall_I.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
grafittiWallI.addComponentOrReplace(gltfShape8)

const largeStoneFloor2 = new Entity('largeStoneFloor2')
engine.addEntity(largeStoneFloor2)
largeStoneFloor2.setParent(_scene)
const gltfShape9 = new GLTFShape("models/Stone_Module_4M/Stone_Module_4M.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
largeStoneFloor2.addComponentOrReplace(gltfShape9)
const transform10 = new Transform({
  position: new Vector3(16, 0, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 4.991276264190674)
})
largeStoneFloor2.addComponentOrReplace(transform10)

const grafittiWallJ2 = new Entity('grafittiWallJ2')
engine.addEntity(grafittiWallJ2)
grafittiWallJ2.setParent(_scene)
grafittiWallJ2.addComponentOrReplace(gltfShape7)
const transform11 = new Transform({
  position: new Vector3(0, 0.0899362564086914, 22),
  rotation: new Quaternion(-5.960463766996327e-8, -0.7071066498756409, -0.7071069478988647, 2.9802318834981634e-8),
  scale: new Vector3(2.9399073123931885, 2.4493227005004883, 0.06737209856510162)
})
grafittiWallJ2.addComponentOrReplace(transform11)

const grafittiWallI3 = new Entity('grafittiWallI3')
engine.addEntity(grafittiWallI3)
grafittiWallI3.setParent(_scene)
grafittiWallI3.addComponentOrReplace(gltfShape8)
const transform12 = new Transform({
  position: new Vector3(0.2053523063659668, 0, 4),
  rotation: new Quaternion(5.9142059603617056e-15, -0.7071068286895752, 8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.0000038146972656, 1.5, 1.0000038146972656)
})
grafittiWallI3.addComponentOrReplace(transform12)

const grafittiWallI4 = new Entity('grafittiWallI4')
engine.addEntity(grafittiWallI4)
grafittiWallI4.setParent(_scene)
grafittiWallI4.addComponentOrReplace(gltfShape8)
const transform13 = new Transform({
  position: new Vector3(0.5, 0, 8.5),
  rotation: new Quaternion(-0.5000000596046448, 0.4999999403953552, -0.5, 0.5),
  scale: new Vector3(1.5000035762786865, 1.5000004768371582, 1.0000022649765015)
})
grafittiWallI4.addComponentOrReplace(transform13)

const grafittiWallJ3 = new Entity('grafittiWallJ3')
engine.addEntity(grafittiWallJ3)
grafittiWallJ3.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(0, 0, 14.5),
  rotation: new Quaternion(-3.2607767855074915e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.5563074350357056, 1.5, 0.1505771428346634)
})
grafittiWallJ3.addComponentOrReplace(transform14)
grafittiWallJ3.addComponentOrReplace(gltfShape7)

const gazebo = new Entity('gazebo')
engine.addEntity(gazebo)
gazebo.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(26.5, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1)
})
gazebo.addComponentOrReplace(transform15)
const gltfShape10 = new GLTFShape("models/Gazebo.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
gazebo.addComponentOrReplace(gltfShape10)

const cyberpunkDoor = new Entity('cyberpunkDoor')
engine.addEntity(cyberpunkDoor)
cyberpunkDoor.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(23, 0, 5.5),
  rotation: new Quaternion(-1.0848133067569484e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
cyberpunkDoor.addComponentOrReplace(transform16)

const coffeeHouse = new Entity('coffeeHouse')
engine.addEntity(coffeeHouse)
coffeeHouse.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(5.5, 0, 11.5),
  rotation: new Quaternion(-1.5014858600494022e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
coffeeHouse.addComponentOrReplace(transform17)
const gltfShape11 = new GLTFShape("models/Coffee_House.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
coffeeHouse.addComponentOrReplace(gltfShape11)

const openAndClosedSign = new Entity('openAndClosedSign')
engine.addEntity(openAndClosedSign)
openAndClosedSign.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(8.03124713897705, 2.2153162956237793, 2.1535544395446777),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
openAndClosedSign.addComponentOrReplace(transform18)

const openAndClosedSign2 = new Entity('openAndClosedSign2')
engine.addEntity(openAndClosedSign2)
openAndClosedSign2.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(8.03124713897705, 2.2153162956237793, 13.653554916381836),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
openAndClosedSign2.addComponentOrReplace(transform19)

const grafittiWallI5 = new Entity('grafittiWallI5')
engine.addEntity(grafittiWallI5)
grafittiWallI5.setParent(_scene)
grafittiWallI5.addComponentOrReplace(gltfShape8)
const transform20 = new Transform({
  position: new Vector3(0, 0, 9),
  rotation: new Quaternion(-0.5000002980232239, -0.4999997019767761, 0.4999999701976776, -0.5000001788139343),
  scale: new Vector3(2.2465951442718506, 1.9207637310028076, 0.10963360965251923)
})
grafittiWallI5.addComponentOrReplace(transform20)

const grafittiWallShortC2 = new Entity('grafittiWallShortC2')
engine.addEntity(grafittiWallShortC2)
grafittiWallShortC2.setParent(_scene)
grafittiWallShortC2.addComponentOrReplace(gltfShape5)
const transform21 = new Transform({
  position: new Vector3(22.48795509338379, 0, 11.652633666992188),
  rotation: new Quaternion(-2.464260247952727e-15, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
grafittiWallShortC2.addComponentOrReplace(transform21)

const grafittiWallShortF2 = new Entity('grafittiWallShortF2')
engine.addEntity(grafittiWallShortF2)
grafittiWallShortF2.setParent(_scene)
grafittiWallShortF2.addComponentOrReplace(gltfShape4)
const transform22 = new Transform({
  position: new Vector3(28.595136642456055, 2.9334682949411217e-7, 11.958274841308594),
  rotation: new Quaternion(1.5192591312058155e-14, 0, -1.5299383531982083e-14, 1),
  scale: new Vector3(1.514038324356079, 1, 1.0000026226043701)
})
grafittiWallShortF2.addComponentOrReplace(transform22)

const motorbikeGrey = new Entity('motorbikeGrey')
engine.addEntity(motorbikeGrey)
motorbikeGrey.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(5.5, 0, 16.5),
  rotation: new Quaternion(-2.2987298930267396e-15, -0.9807853102684021, 1.1691870582808406e-7, 0.1950904279947281),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
motorbikeGrey.addComponentOrReplace(transform23)
const gltfShape12 = new GLTFShape("models/Motorbike_Grey.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
motorbikeGrey.addComponentOrReplace(gltfShape12)

const grafittiWallShortF3 = new Entity('grafittiWallShortF3')
engine.addEntity(grafittiWallShortF3)
grafittiWallShortF3.setParent(_scene)
grafittiWallShortF3.addComponentOrReplace(gltfShape4)
const transform24 = new Transform({
  position: new Vector3(55.5, 4.76837158203125e-7, 22),
  rotation: new Quaternion(-1.3997446458207177e-14, 1, -1.1920928955078125e-7, 0),
  scale: new Vector3(1.5140451192855835, 1, 1.0000042915344238)
})
grafittiWallShortF3.addComponentOrReplace(transform24)

const grafittiWallShortD = new Entity('grafittiWallShortD')
engine.addEntity(grafittiWallShortD)
grafittiWallShortD.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(34, 14.616058349609375, 38.004791259765625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.652542114257812, 4.011092185974121, 2.568220615386963)
})
grafittiWallShortD.addComponentOrReplace(transform25)
const gltfShape13 = new GLTFShape("models/Grafitti_Wall_Short_D.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
grafittiWallShortD.addComponentOrReplace(gltfShape13)

const grafittiWallShortE = new Entity('grafittiWallShortE')
engine.addEntity(grafittiWallShortE)
grafittiWallShortE.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(52.5, 2.384185791015625e-7, 22.5),
  rotation: new Quaternion(1.248542763757955e-15, 0, 1.600116705768298e-16, -1),
  scale: new Vector3(2.0000033378601074, 1, 1.0000016689300537)
})
grafittiWallShortE.addComponentOrReplace(transform26)
const gltfShape14 = new GLTFShape("models/Grafitti_Wall_Short_E.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
grafittiWallShortE.addComponentOrReplace(gltfShape14)

const ladder = new Entity('ladder')
engine.addEntity(ladder)
ladder.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(32.43578338623047, 0, 8.575772285461426),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.2530033588409424, 1.5)
})
ladder.addComponentOrReplace(transform27)
const gltfShape15 = new GLTFShape("models/Ladder.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
ladder.addComponentOrReplace(gltfShape15)

const pixelCritterF = new Entity('pixelCritterF')
engine.addEntity(pixelCritterF)
pixelCritterF.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(26, 2.0208053588867188, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pixelCritterF.addComponentOrReplace(transform28)
const gltfShape16 = new GLTFShape("models/Pixel_Critter_F.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
pixelCritterF.addComponentOrReplace(gltfShape16)

const radioactiveContainer = new Entity('radioactiveContainer')
engine.addEntity(radioactiveContainer)
radioactiveContainer.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(46, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
radioactiveContainer.addComponentOrReplace(transform29)
const gltfShape17 = new GLTFShape("models/Radioactive_Container.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
radioactiveContainer.addComponentOrReplace(gltfShape17)

const streetCleaner = new Entity('streetCleaner')
engine.addEntity(streetCleaner)
streetCleaner.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(39, 0, 18.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
streetCleaner.addComponentOrReplace(transform30)
const gltfShape18 = new GLTFShape("models/Street_Cleaner.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
streetCleaner.addComponentOrReplace(gltfShape18)

const sushiDisplay = new Entity('sushiDisplay')
engine.addEntity(sushiDisplay)
sushiDisplay.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(6.253327369689941, 1.33067786693573, 29.5),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000048875808716, 1.5, 1.000002145767212)
})
sushiDisplay.addComponentOrReplace(transform31)
const gltfShape19 = new GLTFShape("models/Sushi_Display.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
sushiDisplay.addComponentOrReplace(gltfShape19)

const trashGroup = new Entity('trashGroup')
engine.addEntity(trashGroup)
trashGroup.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(21.5, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
trashGroup.addComponentOrReplace(transform32)
const gltfShape20 = new GLTFShape("models/Trash_Group.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
trashGroup.addComponentOrReplace(gltfShape20)

const zebraCrossing2 = new Entity('zebraCrossing2')
engine.addEntity(zebraCrossing2)
zebraCrossing2.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(16.02074432373047, 0, 13.663309097290039),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4344548285007477, 1, 0.500237762928009)
})
zebraCrossing2.addComponentOrReplace(transform33)
const gltfShape21 = new GLTFShape("models/Zebra_Crossing.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
zebraCrossing2.addComponentOrReplace(gltfShape21)

const zebraCrossing = new Entity('zebraCrossing')
engine.addEntity(zebraCrossing)
zebraCrossing.setParent(_scene)
zebraCrossing.addComponentOrReplace(gltfShape21)
const transform34 = new Transform({
  position: new Vector3(16.153627395629883, 0, 20.005361557006836),
  rotation: new Quaternion(4.707009945253667e-15, 0.7097025513648987, -8.460312983515905e-8, -0.7045015096664429),
  scale: new Vector3(0.4344514310359955, 1, 0.40436577796936035)
})
zebraCrossing.addComponentOrReplace(transform34)

const fallenLeaves = new Entity('fallenLeaves')
engine.addEntity(fallenLeaves)
fallenLeaves.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(21.5, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fallenLeaves.addComponentOrReplace(transform35)
const gltfShape22 = new GLTFShape("models/Fallen_Leaves.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
fallenLeaves.addComponentOrReplace(gltfShape22)

const bulletinPost = new Entity('bulletinPost')
engine.addEntity(bulletinPost)
bulletinPost.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(32.5, 0, 24.804466247558594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bulletinPost.addComponentOrReplace(transform36)
const gltfShape23 = new GLTFShape("models/Bulletin_Post.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
bulletinPost.addComponentOrReplace(gltfShape23)

const barrelSpilled = new Entity('barrelSpilled')
engine.addEntity(barrelSpilled)
barrelSpilled.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(45, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barrelSpilled.addComponentOrReplace(transform37)
const gltfShape24 = new GLTFShape("models/Barrel_Spilled.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
barrelSpilled.addComponentOrReplace(gltfShape24)

const busStop = new Entity('busStop')
engine.addEntity(busStop)
busStop.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(45.125, 0.03650856018066406, 49.23180389404297),
  rotation: new Quaternion(3.4044113387469554e-15, -0.7071068286895752, 8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
busStop.addComponentOrReplace(transform38)
const gltfShape25 = new GLTFShape("models/Bus_Stop.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
busStop.addComponentOrReplace(gltfShape25)

const largeStoneFloor8 = new Entity('largeStoneFloor8')
engine.addEntity(largeStoneFloor8)
largeStoneFloor8.setParent(_scene)
largeStoneFloor8.addComponentOrReplace(gltfShape9)
const transform39 = new Transform({
  position: new Vector3(52.496578216552734, 0, 63.99976348876953),
  rotation: new Quaternion(2.313108489064618e-15, 8.940696716308594e-8, -6.495404393383822e-15, -1),
  scale: new Vector3(1.5000050067901611, 1, 7.793517112731934)
})
largeStoneFloor8.addComponentOrReplace(transform39)

const highBuilding = new Entity('highBuilding')
engine.addEntity(highBuilding)
highBuilding.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(59.7432975769043, 0, 41.884220123291016),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.669981598854065, 1, 1)
})
highBuilding.addComponentOrReplace(transform40)
const gltfShape26 = new GLTFShape("models/High_Building_1.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
highBuilding.addComponentOrReplace(gltfShape26)

const bus = new Entity('bus')
engine.addEntity(bus)
bus.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(48.568328857421875, 0, 47.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bus.addComponentOrReplace(transform41)
const gltfShape27 = new GLTFShape("models/Bus.glb")
gltfShape27.withCollisions = true
gltfShape27.isPointerBlocker = true
gltfShape27.visible = true
bus.addComponentOrReplace(gltfShape27)

const videoScreenStanding = new Entity('videoScreenStanding')
engine.addEntity(videoScreenStanding)
videoScreenStanding.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(25.01663589477539, 1, 36.303749084472656),
  rotation: new Quaternion(-4.591688527067362e-15, 1, -1.1920926823449918e-7, 1.4901161193847656e-8),
  scale: new Vector3(1.1488728523254395, 1, 1)
})
videoScreenStanding.addComponentOrReplace(transform42)

const barBlack = new Entity('barBlack')
engine.addEntity(barBlack)
barBlack.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(11.5, 0, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barBlack.addComponentOrReplace(transform43)
const gltfShape28 = new GLTFShape("models/Bar_Black_No_Taps.glb")
gltfShape28.withCollisions = true
gltfShape28.isPointerBlocker = true
gltfShape28.visible = true
barBlack.addComponentOrReplace(gltfShape28)

const arcadeMachineBlack = new Entity('arcadeMachineBlack')
engine.addEntity(arcadeMachineBlack)
arcadeMachineBlack.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(1.626559853553772, 0, 19.992984771728516),
  rotation: new Quaternion(-1.930835955463411e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
arcadeMachineBlack.addComponentOrReplace(transform44)
const gltfShape29 = new GLTFShape("models/Arcade_Machine_Black.glb")
gltfShape29.withCollisions = true
gltfShape29.isPointerBlocker = true
gltfShape29.visible = true
arcadeMachineBlack.addComponentOrReplace(gltfShape29)

const umbrellaTable2 = new Entity('umbrellaTable2')
engine.addEntity(umbrellaTable2)
umbrellaTable2.setParent(_scene)
const gltfShape30 = new GLTFShape("models/TableBar_01/TableBar_01.glb")
gltfShape30.withCollisions = true
gltfShape30.isPointerBlocker = true
gltfShape30.visible = true
umbrellaTable2.addComponentOrReplace(gltfShape30)
const transform45 = new Transform({
  position: new Vector3(30.5, 0, 29.152233123779297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
umbrellaTable2.addComponentOrReplace(transform45)

const grafittiWallShortC3 = new Entity('grafittiWallShortC3')
engine.addEntity(grafittiWallShortC3)
grafittiWallShortC3.setParent(_scene)
grafittiWallShortC3.addComponentOrReplace(gltfShape5)
const transform46 = new Transform({
  position: new Vector3(38.59774398803711, 0, 27.5),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0493742227554321, 1, 1.0000030994415283)
})
grafittiWallShortC3.addComponentOrReplace(transform46)

const grafittiWallShortF4 = new Entity('grafittiWallShortF4')
engine.addEntity(grafittiWallShortF4)
grafittiWallShortF4.setParent(_scene)
grafittiWallShortF4.addComponentOrReplace(gltfShape4)
const transform47 = new Transform({
  position: new Vector3(38.5655403137207, 0, 22.00702667236328),
  rotation: new Quaternion(2.927801145920011e-15, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(1.5140401124954224, 1, 1.0000030994415283)
})
grafittiWallShortF4.addComponentOrReplace(transform47)

const grafittiWallShortF5 = new Entity('grafittiWallShortF5')
engine.addEntity(grafittiWallShortF5)
grafittiWallShortF5.setParent(_scene)
grafittiWallShortF5.addComponentOrReplace(gltfShape4)
const transform48 = new Transform({
  position: new Vector3(38.09774398803711, 6.548133910655451e-7, 37),
  rotation: new Quaternion(-1.8636224087911248e-14, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.5140477418899536, 1, 1.0000042915344238)
})
grafittiWallShortF5.addComponentOrReplace(transform48)

const grafittiWallShortC4 = new Entity('grafittiWallShortC4')
engine.addEntity(grafittiWallShortC4)
grafittiWallShortC4.setParent(_scene)
grafittiWallShortC4.addComponentOrReplace(gltfShape5)
const transform49 = new Transform({
  position: new Vector3(38.034793853759766, 0, 31.511783599853516),
  rotation: new Quaternion(-4.4253697962257175e-15, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.000004529953003, 1, 1.000004529953003)
})
grafittiWallShortC4.addComponentOrReplace(transform49)

const grafittiWallShortF6 = new Entity('grafittiWallShortF6')
engine.addEntity(grafittiWallShortF6)
grafittiWallShortF6.setParent(_scene)
grafittiWallShortF6.addComponentOrReplace(gltfShape4)
const transform50 = new Transform({
  position: new Vector3(38.71398162841797, 0, 36.00559616088867),
  rotation: new Quaternion(2.927801145920011e-15, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(1.514046549797058, 1, 1.0000038146972656)
})
grafittiWallShortF6.addComponentOrReplace(transform50)

const grafittiWallShortC5 = new Entity('grafittiWallShortC5')
engine.addEntity(grafittiWallShortC5)
grafittiWallShortC5.setParent(_scene)
grafittiWallShortC5.addComponentOrReplace(gltfShape5)
const transform51 = new Transform({
  position: new Vector3(38.602474212646484, 0, 41.49856948852539),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0490164756774902, 1, 1.0000042915344238)
})
grafittiWallShortC5.addComponentOrReplace(transform51)

const grafittiWallShortC6 = new Entity('grafittiWallShortC6')
engine.addEntity(grafittiWallShortC6)
grafittiWallShortC6.setParent(_scene)
grafittiWallShortC6.addComponentOrReplace(gltfShape5)
const transform52 = new Transform({
  position: new Vector3(38.010135650634766, 0, 45.510353088378906),
  rotation: new Quaternion(-4.4253697962257175e-15, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.0000059604644775, 1, 1.0000059604644775)
})
grafittiWallShortC6.addComponentOrReplace(transform52)

const grafittiWallShortF7 = new Entity('grafittiWallShortF7')
engine.addEntity(grafittiWallShortF7)
grafittiWallShortF7.setParent(_scene)
grafittiWallShortF7.addComponentOrReplace(gltfShape4)
const transform53 = new Transform({
  position: new Vector3(38.00054931640625, 6.548133910655451e-7, 51.00406265258789),
  rotation: new Quaternion(-1.8636224087911248e-14, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.5140531063079834, 1, 1.0000054836273193)
})
grafittiWallShortF7.addComponentOrReplace(transform53)

const largeStoneFloor10 = new Entity('largeStoneFloor10')
engine.addEntity(largeStoneFloor10)
largeStoneFloor10.setParent(_scene)
largeStoneFloor10.addComponentOrReplace(gltfShape9)
const transform54 = new Transform({
  position: new Vector3(46.55741882324219, 0, 63.99029541015625),
  rotation: new Quaternion(2.313108489064618e-15, 8.940696716308594e-8, -6.495404393383822e-15, -1),
  scale: new Vector3(1.5000050067901611, 1, 11.308806419372559)
})
largeStoneFloor10.addComponentOrReplace(transform54)

const zebraCrossing3 = new Entity('zebraCrossing3')
engine.addEntity(zebraCrossing3)
zebraCrossing3.setParent(_scene)
zebraCrossing3.addComponentOrReplace(gltfShape21)
const transform55 = new Transform({
  position: new Vector3(46.375, 0, 32.7681999206543),
  rotation: new Quaternion(5.604824635278231e-15, -1, 1.1920928955078125e-7, 1.4901161193847656e-7),
  scale: new Vector3(0.4344548285007477, 1, 0.500237762928009)
})
zebraCrossing3.addComponentOrReplace(transform55)

const zebraCrossing4 = new Entity('zebraCrossing4')
engine.addEntity(zebraCrossing4)
zebraCrossing4.setParent(_scene)
zebraCrossing4.addComponentOrReplace(gltfShape21)
const transform56 = new Transform({
  position: new Vector3(40.5, 0, 20),
  rotation: new Quaternion(5.604824635278231e-15, -1, 1.1920928955078125e-7, 1.4901161193847656e-7),
  scale: new Vector3(0.4344548285007477, 1, 0.500237762928009)
})
zebraCrossing4.addComponentOrReplace(transform56)

const tieredDesk = new Entity('tieredDesk')
engine.addEntity(tieredDesk)
tieredDesk.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(3.5, 0, 30.47548484802246),
  rotation: new Quaternion(8.939736603065615e-17, -0.015314907766878605, 1.8256804956706674e-9, -0.9998827576637268),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
tieredDesk.addComponentOrReplace(transform57)
const gltfShape31 = new GLTFShape("models/Desk_01/Desk_01.glb")
gltfShape31.withCollisions = true
gltfShape31.isPointerBlocker = true
gltfShape31.visible = true
tieredDesk.addComponentOrReplace(gltfShape31)

const fallenLeaves2 = new Entity('fallenLeaves2')
engine.addEntity(fallenLeaves2)
fallenLeaves2.setParent(_scene)
fallenLeaves2.addComponentOrReplace(gltfShape22)
const transform58 = new Transform({
  position: new Vector3(12.5, 0, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fallenLeaves2.addComponentOrReplace(transform58)

const explore = new Entity('explore')
engine.addEntity(explore)
explore.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(30.743392944335938, 5, 7.930344581604004),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
explore.addComponentOrReplace(transform59)
const gltfShape32 = new GLTFShape("models/Explore.glb")
gltfShape32.withCollisions = true
gltfShape32.isPointerBlocker = true
gltfShape32.visible = true
explore.addComponentOrReplace(gltfShape32)

const lampRed = new Entity('lampRed')
engine.addEntity(lampRed)
lampRed.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(24, 1.118368148803711, 3),
  rotation: new Quaternion(1.1038385137852273e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
lampRed.addComponentOrReplace(transform60)
const gltfShape33 = new GLTFShape("models/Lamp_Red.glb")
gltfShape33.withCollisions = true
gltfShape33.isPointerBlocker = true
gltfShape33.visible = true
lampRed.addComponentOrReplace(gltfShape33)

const tieredDesk2 = new Entity('tieredDesk2')
engine.addEntity(tieredDesk2)
tieredDesk2.setParent(_scene)
tieredDesk2.addComponentOrReplace(gltfShape31)
const transform61 = new Transform({
  position: new Vector3(5.911056041717529, 0, 12),
  rotation: new Quaternion(-2.8050415079073927e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.5000051259994507, 1, 1.5000051259994507)
})
tieredDesk2.addComponentOrReplace(transform61)

const tieredDesk3 = new Entity('tieredDesk3')
engine.addEntity(tieredDesk3)
tieredDesk3.setParent(_scene)
tieredDesk3.addComponentOrReplace(gltfShape31)
const transform62 = new Transform({
  position: new Vector3(4, 0, 4.5),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(1.500002145767212, 1, 1.500002145767212)
})
tieredDesk3.addComponentOrReplace(transform62)

//active arcade
const arcadeMachineBlack2 = new Entity('arcadeMachineBlack2')
engine.addEntity(arcadeMachineBlack2)
arcadeMachineBlack2.setParent(_scene)
//arcadeMachineBlack2.addComponentOrReplace(gltfShape29) //must this be commented out?  could we keep this?
const transform63 = new Transform({
  position: new Vector3(62, 0, 38),
  rotation: new Quaternion(9.350888830882576e-15, -0.7071067094802856, 8.429367426288081e-8, 0.70710688829422),
  scale: new Vector3(1, 1, 1)
})
arcadeMachineBlack2.addComponentOrReplace(transform63)

const openAndClosedSign3 = new Entity('openAndClosedSign3')
engine.addEntity(openAndClosedSign3)
openAndClosedSign3.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(4.573835849761963, 2.2153162956237793, 27.16867446899414),
  rotation: new Quaternion(-5.057186494659277e-15, 1, -1.1920928244535389e-7, -5.960464477539063e-8),
  scale: new Vector3(1.0000032186508179, 1, 1.0000032186508179)
})
openAndClosedSign3.addComponentOrReplace(transform64)

const helipad = new Entity('helipad')
engine.addEntity(helipad)
helipad.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(56.501976013183594, 30.89068603515625, 41.77299880981445),
  rotation: new Quaternion(9.203628764870627e-15, 1, -1.1920927533992653e-7, -2.9802322387695312e-8),
  scale: new Vector3(0.7144941091537476, 0.7620925903320312, 0.7188149094581604)
})
helipad.addComponentOrReplace(transform65)
const gltfShape34 = new GLTFShape("models/Helipad.glb")
gltfShape34.withCollisions = true
gltfShape34.isPointerBlocker = true
gltfShape34.visible = true
helipad.addComponentOrReplace(gltfShape34)

const helicopter = new Entity('helicopter')
engine.addEntity(helicopter)
helicopter.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(55.834651947021484, 32.41581344604492, 42.63148498535156),
  rotation: new Quaternion(1.3417443188673637e-14, -0.9956448078155518, 1.1869009597376134e-7, 0.09322846680879593),
  scale: new Vector3(0.9491881728172302, 1.0405843257904053, 0.8737260103225708)
})
helicopter.addComponentOrReplace(transform66)

const grafittiWallShortC7 = new Entity('grafittiWallShortC7')
engine.addEntity(grafittiWallShortC7)
grafittiWallShortC7.setParent(_scene)
grafittiWallShortC7.addComponentOrReplace(gltfShape5)
const transform67 = new Transform({
  position: new Vector3(38.458560943603516, 0, 54.49410629272461),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
grafittiWallShortC7.addComponentOrReplace(transform67)

const grafittiWallShortC8 = new Entity('grafittiWallShortC8')
engine.addEntity(grafittiWallShortC8)
grafittiWallShortC8.setParent(_scene)
grafittiWallShortC8.addComponentOrReplace(gltfShape5)
const transform68 = new Transform({
  position: new Vector3(37.86515808105469, 0, 58.569732666015625),
  rotation: new Quaternion(-4.4253697962257175e-15, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.0494463443756104, 1, 1.0000066757202148)
})
grafittiWallShortC8.addComponentOrReplace(transform68)

const grafittiWallShortF10 = new Entity('grafittiWallShortF10')
engine.addEntity(grafittiWallShortF10)
grafittiWallShortF10.setParent(_scene)
grafittiWallShortF10.addComponentOrReplace(gltfShape4)
const transform69 = new Transform({
  position: new Vector3(37.88560104370117, 0, 61.58747482299805),
  rotation: new Quaternion(-1.8636224087911248e-14, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.5140472650527954, 1, 1.0000059604644775)
})
grafittiWallShortF10.addComponentOrReplace(transform69)

const grafittiWallShortF11 = new Entity('grafittiWallShortF11')
engine.addEntity(grafittiWallShortF11)
grafittiWallShortF11.setParent(_scene)
grafittiWallShortF11.addComponentOrReplace(gltfShape4)
const transform70 = new Transform({
  position: new Vector3(28.588050842285156, 8.639352699901792e-7, 11.385149955749512),
  rotation: new Quaternion(1.8780323026964044e-14, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(1.5140419006347656, 1, 1.000004529953003)
})
grafittiWallShortF11.addComponentOrReplace(transform70)

const grafittiWallShortC9 = new Entity('grafittiWallShortC9')
engine.addEntity(grafittiWallShortC9)
grafittiWallShortC9.setParent(_scene)
grafittiWallShortC9.addComponentOrReplace(gltfShape5)
const transform71 = new Transform({
  position: new Vector3(34.088050842285156, 2.052834133792203e-7, 11.385149955749512),
  rotation: new Quaternion(8.015466850636813e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(1.0000042915344238, 1, 1.0000042915344238)
})
grafittiWallShortC9.addComponentOrReplace(transform71)

const grafittiWallShortC10 = new Entity('grafittiWallShortC10')
engine.addEntity(grafittiWallShortC10)
grafittiWallShortC10.setParent(_scene)
grafittiWallShortC10.addComponentOrReplace(gltfShape5)
const transform72 = new Transform({
  position: new Vector3(38.00956726074219, 0, 11.978678703308105),
  rotation: new Quaternion(1.780575063477577e-14, 0, 1.3745164471131062e-14, 1),
  scale: new Vector3(1.0000054836273193, 1, 1.0000054836273193)
})
grafittiWallShortC10.addComponentOrReplace(transform72)

const grafittiWallShortF12 = new Entity('grafittiWallShortF12')
engine.addEntity(grafittiWallShortF12)
grafittiWallShortF12.setParent(_scene)
grafittiWallShortF12.addComponentOrReplace(gltfShape4)
const transform73 = new Transform({
  position: new Vector3(43.588050842285156, 0, 11.885149955749512),
  rotation: new Quaternion(2.785434135134466e-14, 0, -4.656886558841657e-16, 1),
  scale: new Vector3(1.5140440464019775, 1, 1.0000052452087402)
})
grafittiWallShortF12.addComponentOrReplace(transform73)

const explore2 = new Entity('explore2')
engine.addEntity(explore2)
explore2.setParent(_scene)
explore2.addComponentOrReplace(gltfShape32)
const transform74 = new Transform({
  position: new Vector3(34.34791946411133, 4.183753967285156, 8.744123458862305),
  rotation: new Quaternion(0, 0, 0.103447325527668, 0.9946349859237671),
  scale: new Vector3(0.9999999403953552, 0.9999999403953552, 1)
})
explore2.addComponentOrReplace(transform74)

const fallenLeaves3 = new Entity('fallenLeaves3')
engine.addEntity(fallenLeaves3)
fallenLeaves3.setParent(_scene)
fallenLeaves3.addComponentOrReplace(gltfShape22)
const transform75 = new Transform({
  position: new Vector3(5.5, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fallenLeaves3.addComponentOrReplace(transform75)

const pixelCritterF2 = new Entity('pixelCritterF2')
engine.addEntity(pixelCritterF2)
pixelCritterF2.setParent(_scene)
pixelCritterF2.addComponentOrReplace(gltfShape16)
const transform76 = new Transform({
  position: new Vector3(40.5, 2.0208053588867188, 7.848471641540527),
  rotation: new Quaternion(0.004151705652475357, 0.07168858498334885, -0.07612839341163635, 0.9945089817047119),
  scale: new Vector3(1.7030915021896362, 1.6653074026107788, 1.04555344581604)
})
pixelCritterF2.addComponentOrReplace(transform76)

const zebraCrossing5 = new Entity('zebraCrossing5')
engine.addEntity(zebraCrossing5)
zebraCrossing5.setParent(_scene)
zebraCrossing5.addComponentOrReplace(gltfShape21)
const transform77 = new Transform({
  position: new Vector3(40.375, 0, 32.7681999206543),
  rotation: new Quaternion(5.604824635278231e-15, -1, 1.1920928955078125e-7, 1.4901161193847656e-7),
  scale: new Vector3(0.4344548285007477, 1, 0.500237762928009)
})
zebraCrossing5.addComponentOrReplace(transform77)

const grafittiWallShortC11 = new Entity('grafittiWallShortC11')
engine.addEntity(grafittiWallShortC11)
grafittiWallShortC11.setParent(_scene)
grafittiWallShortC11.addComponentOrReplace(gltfShape5)
const transform78 = new Transform({
  position: new Vector3(0.005102965049445629, 0, 25.9512996673584),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(-2.934136152267456, 4.531857013702393, 0.022074133157730103)
})
grafittiWallShortC11.addComponentOrReplace(transform78)

const grafittiWallShortC12 = new Entity('grafittiWallShortC12')
engine.addEntity(grafittiWallShortC12)
grafittiWallShortC12.setParent(_scene)
grafittiWallShortC12.addComponentOrReplace(gltfShape5)
const transform79 = new Transform({
  position: new Vector3(0.05277638882398605, 0, 31.5),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.667232036590576, 6.5325164794921875, 0.07251817733049393)
})
grafittiWallShortC12.addComponentOrReplace(transform79)

const grafittiWallShortF13 = new Entity('grafittiWallShortF13')
engine.addEntity(grafittiWallShortF13)
grafittiWallShortF13.setParent(_scene)
grafittiWallShortF13.addComponentOrReplace(gltfShape4)
const transform80 = new Transform({
  position: new Vector3(3.1168155670166016, 0, 37.40888595581055),
  rotation: new Quaternion(2.785434135134466e-14, 0, -4.656886558841657e-16, 1),
  scale: new Vector3(1.5140440464019775, 1, 1.0000052452087402)
})
grafittiWallShortF13.addComponentOrReplace(transform80)

const trashGroup2 = new Entity('trashGroup2')
engine.addEntity(trashGroup2)
trashGroup2.setParent(_scene)
trashGroup2.addComponentOrReplace(gltfShape20)
const transform81 = new Transform({
  position: new Vector3(3.462179183959961, 0, 33.13774490356445),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
trashGroup2.addComponentOrReplace(transform81)

const gazebo2 = new Entity('gazebo2')
engine.addEntity(gazebo2)
gazebo2.setParent(_scene)
gazebo2.addComponentOrReplace(gltfShape10)
const transform82 = new Transform({
  position: new Vector3(27, 0, 52.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1)
})
gazebo2.addComponentOrReplace(transform82)

const bulletinPost2 = new Entity('bulletinPost2')
engine.addEntity(bulletinPost2)
bulletinPost2.setParent(_scene)
bulletinPost2.addComponentOrReplace(gltfShape23)
const transform83 = new Transform({
  position: new Vector3(32, 0, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bulletinPost2.addComponentOrReplace(transform83)

const zebraCrossing6 = new Entity('zebraCrossing6')
engine.addEntity(zebraCrossing6)
zebraCrossing6.setParent(_scene)
zebraCrossing6.addComponentOrReplace(gltfShape21)
const transform84 = new Transform({
  position: new Vector3(40.5, 0, 60),
  rotation: new Quaternion(5.604824635278231e-15, -1, 1.1920928955078125e-7, 1.4901161193847656e-7),
  scale: new Vector3(0.4344548285007477, 1, 0.500237762928009)
})
zebraCrossing6.addComponentOrReplace(transform84)

const radioCyberpunk = new Entity('radioCyberpunk')
engine.addEntity(radioCyberpunk)
radioCyberpunk.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(20.930233001708984, 0.9512314796447754, 36),
  rotation: new Quaternion(0.7071068286895752, -0.7071068286895752, -1.5278232012860826e-7, -4.7415195325584136e-8),
  scale: new Vector3(2.808915853500366, 3.000044107437134, 3.329693078994751)
})
radioCyberpunk.addComponentOrReplace(transform85)

const grafittiWallShortE4 = new Entity('grafittiWallShortE4')
engine.addEntity(grafittiWallShortE4)
grafittiWallShortE4.setParent(_scene)
grafittiWallShortE4.addComponentOrReplace(gltfShape14)
const transform86 = new Transform({
  position: new Vector3(52.5, 0.04423040151596069, 34.5),
  rotation: new Quaternion(0.5000000596046448, -0.5, -0.5000001192092896, -0.4999999403953552),
  scale: new Vector3(14.000123023986816, -4.326514720916748, 0.08455407619476318)
})
grafittiWallShortE4.addComponentOrReplace(transform86)

const grafittiWallJ5 = new Entity('grafittiWallJ5')
engine.addEntity(grafittiWallJ5)
grafittiWallJ5.setParent(_scene)
grafittiWallJ5.addComponentOrReplace(gltfShape7)
const transform87 = new Transform({
  position: new Vector3(0, 0.0899362564086914, 22),
  rotation: new Quaternion(-5.960463766996327e-8, -0.7071066498756409, -0.7071069478988647, 2.9802318834981634e-8),
  scale: new Vector3(2.9399073123931885, 2.4493227005004883, 0.06737209856510162)
})
grafittiWallJ5.addComponentOrReplace(transform87)

const lightDecor = new Entity('lightDecor')
engine.addEntity(lightDecor)
lightDecor.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(55.27974319458008, 4.5, 41.75993728637695),
  rotation: new Quaternion(1.1858810662650947e-15, -0.7074453234672546, 8.433402598484463e-8, 0.7067680954933167),
  scale: new Vector3(2.9997828006744385, 0.8142832517623901, 1.0026075839996338)
})
lightDecor.addComponentOrReplace(transform88)
const gltfShape35 = new GLTFShape("models/Light_Decor3.glb")
gltfShape35.withCollisions = true
gltfShape35.isPointerBlocker = true
gltfShape35.visible = true
lightDecor.addComponentOrReplace(gltfShape35)

const ladder2 = new Entity('ladder2')
engine.addEntity(ladder2)
ladder2.setParent(_scene)
ladder2.addComponentOrReplace(gltfShape15)
const transform89 = new Transform({
  position: new Vector3(1.1540093421936035, 0, 6.6273040771484375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.7873320579528809, 1.002801537513733)
})
ladder2.addComponentOrReplace(transform89)

const toolbox = new Entity('toolbox')
engine.addEntity(toolbox)
toolbox.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(62.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toolbox.addComponentOrReplace(transform90)

const imageComputerScreen = new Entity('imageComputerScreen')
engine.addEntity(imageComputerScreen)
imageComputerScreen.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(6.4427690505981445, 1.387646198272705, 31.466455459594727),
  rotation: new Quaternion(-0.0068273465149104595, 0.7070738673210144, -0.006827430799603462, 0.7070738673210144),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
imageComputerScreen.addComponentOrReplace(transform91)

const imageComputerScreen2 = new Entity('imageComputerScreen2')
engine.addEntity(imageComputerScreen2)
imageComputerScreen2.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(3.615582227706909, 1.019269585609436, 30.747970581054688),
  rotation: new Quaternion(4.656624530419151e-10, -2.9802318834981634e-8, 0.009655325673520565, -0.9999533891677856),
  scale: new Vector3(1.0000025033950806, 1, 1.0000025033950806)
})
imageComputerScreen2.addComponentOrReplace(transform92)

const imageComputerScreen3 = new Entity('imageComputerScreen3')
engine.addEntity(imageComputerScreen3)
imageComputerScreen3.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(5.587139129638672, 1.019269585609436, 11.948684692382812),
  rotation: new Quaternion(-0.006827346049249172, 0.7070738673210144, 0.006827262230217457, -0.7070738077163696),
  scale: new Vector3(1.0000028610229492, 1, 1.0000030994415283)
})
imageComputerScreen3.addComponentOrReplace(transform93)

const imageComputerScreen4 = new Entity('imageComputerScreen4')
engine.addEntity(imageComputerScreen4)
imageComputerScreen4.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(4.365204811096191, 1.019269585609436, 4.018247604370117),
  rotation: new Quaternion(-0.006827346049249172, 0.7070738077163696, -0.006827429868280888, 0.7070739269256592),
  scale: new Vector3(1.0000035762786865, 1.0000001192092896, 1.0000039339065552)
})
imageComputerScreen4.addComponentOrReplace(transform94)

const garlandCurve = new Entity('garlandCurve')
engine.addEntity(garlandCurve)
garlandCurve.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(4.5, 3.953115463256836, 18.905498504638672),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.7035244703292847, 1, 1.0000016689300537)
})
garlandCurve.addComponentOrReplace(transform95)
const gltfShape36 = new GLTFShape("models/Garland_Curve.glb")
gltfShape36.withCollisions = true
gltfShape36.isPointerBlocker = true
gltfShape36.visible = true
garlandCurve.addComponentOrReplace(gltfShape36)

const garlandCurve2 = new Entity('garlandCurve2')
engine.addEntity(garlandCurve2)
garlandCurve2.setParent(_scene)
garlandCurve2.addComponentOrReplace(gltfShape36)
const transform96 = new Transform({
  position: new Vector3(6.762426376342773, 3.953115463256836, 18.905498504638672),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.7035245895385742, 1, 1.0000019073486328)
})
garlandCurve2.addComponentOrReplace(transform96)

const spotlight = new Entity('spotlight')
engine.addEntity(spotlight)
spotlight.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(20, 5.5, 37.004791259765625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spotlight.addComponentOrReplace(transform97)
const gltfShape37 = new GLTFShape("models/Spotlight.glb")
gltfShape37.withCollisions = true
gltfShape37.isPointerBlocker = true
gltfShape37.visible = true
spotlight.addComponentOrReplace(gltfShape37)

const concrete = new Entity('concrete')
engine.addEntity(concrete)
concrete.setParent(_scene)
const gltfShape38 = new GLTFShape("models/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape38.withCollisions = true
gltfShape38.isPointerBlocker = true
gltfShape38.visible = true
concrete.addComponentOrReplace(gltfShape38)
const transform98 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete.addComponentOrReplace(transform98)

const concrete2 = new Entity('concrete2')
engine.addEntity(concrete2)
concrete2.setParent(_scene)
concrete2.addComponentOrReplace(gltfShape38)
const transform99 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete2.addComponentOrReplace(transform99)

const concrete3 = new Entity('concrete3')
engine.addEntity(concrete3)
concrete3.setParent(_scene)
concrete3.addComponentOrReplace(gltfShape38)
const transform100 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete3.addComponentOrReplace(transform100)

const concrete4 = new Entity('concrete4')
engine.addEntity(concrete4)
concrete4.setParent(_scene)
concrete4.addComponentOrReplace(gltfShape38)
const transform101 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete4.addComponentOrReplace(transform101)

const concrete5 = new Entity('concrete5')
engine.addEntity(concrete5)
concrete5.setParent(_scene)
concrete5.addComponentOrReplace(gltfShape38)
const transform102 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete5.addComponentOrReplace(transform102)

const concrete6 = new Entity('concrete6')
engine.addEntity(concrete6)
concrete6.setParent(_scene)
concrete6.addComponentOrReplace(gltfShape38)
const transform103 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete6.addComponentOrReplace(transform103)

const concrete7 = new Entity('concrete7')
engine.addEntity(concrete7)
concrete7.setParent(_scene)
concrete7.addComponentOrReplace(gltfShape38)
const transform104 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete7.addComponentOrReplace(transform104)

const concrete8 = new Entity('concrete8')
engine.addEntity(concrete8)
concrete8.setParent(_scene)
concrete8.addComponentOrReplace(gltfShape38)
const transform105 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete8.addComponentOrReplace(transform105)

const concrete9 = new Entity('concrete9')
engine.addEntity(concrete9)
concrete9.setParent(_scene)
concrete9.addComponentOrReplace(gltfShape38)
const transform106 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete9.addComponentOrReplace(transform106)

const concrete10 = new Entity('concrete10')
engine.addEntity(concrete10)
concrete10.setParent(_scene)
concrete10.addComponentOrReplace(gltfShape38)
const transform107 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete10.addComponentOrReplace(transform107)

const concrete11 = new Entity('concrete11')
engine.addEntity(concrete11)
concrete11.setParent(_scene)
concrete11.addComponentOrReplace(gltfShape38)
const transform108 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete11.addComponentOrReplace(transform108)

const concrete12 = new Entity('concrete12')
engine.addEntity(concrete12)
concrete12.setParent(_scene)
concrete12.addComponentOrReplace(gltfShape38)
const transform109 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete12.addComponentOrReplace(transform109)

const concrete13 = new Entity('concrete13')
engine.addEntity(concrete13)
concrete13.setParent(_scene)
concrete13.addComponentOrReplace(gltfShape38)
const transform110 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete13.addComponentOrReplace(transform110)

const concrete14 = new Entity('concrete14')
engine.addEntity(concrete14)
concrete14.setParent(_scene)
concrete14.addComponentOrReplace(gltfShape38)
const transform111 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete14.addComponentOrReplace(transform111)

const concrete15 = new Entity('concrete15')
engine.addEntity(concrete15)
concrete15.setParent(_scene)
concrete15.addComponentOrReplace(gltfShape38)
const transform112 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete15.addComponentOrReplace(transform112)

const concrete16 = new Entity('concrete16')
engine.addEntity(concrete16)
concrete16.setParent(_scene)
concrete16.addComponentOrReplace(gltfShape38)
const transform113 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concrete16.addComponentOrReplace(transform113)

const highBuilding2 = new Entity('highBuilding2')
engine.addEntity(highBuilding2)
highBuilding2.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(59.5, 0, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2946497201919556, 1, 1.9999998807907104)
})
highBuilding2.addComponentOrReplace(transform114)
const gltfShape39 = new GLTFShape("models/High_Building_2.glb")
gltfShape39.withCollisions = true
gltfShape39.isPointerBlocker = true
gltfShape39.visible = true
highBuilding2.addComponentOrReplace(gltfShape39)

const grafittiWallShortD2 = new Entity('grafittiWallShortD2')
engine.addEntity(grafittiWallShortD2)
grafittiWallShortD2.setParent(_scene)
grafittiWallShortD2.addComponentOrReplace(gltfShape13)
const transform115 = new Transform({
  position: new Vector3(34, 0.01692211627960205, 52.5),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.652542114257812, -7.030407428741455, 0.019996851682662964)
})
grafittiWallShortD2.addComponentOrReplace(transform115)

const stairsFireEscape2 = new Entity('stairsFireEscape2')
engine.addEntity(stairsFireEscape2)
stairsFireEscape2.setParent(_scene)
const gltfShape40 = new GLTFShape("models/fireEscapeStairs.glb")
gltfShape40.withCollisions = true
gltfShape40.isPointerBlocker = true
gltfShape40.visible = true
stairsFireEscape2.addComponentOrReplace(gltfShape40)
const transform116 = new Transform({
  position: new Vector3(36, 0, 45.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.4820572137832642, 1.499999761581421)
})
stairsFireEscape2.addComponentOrReplace(transform116)

const grafittiWallShortF8 = new Entity('grafittiWallShortF8')
engine.addEntity(grafittiWallShortF8)
grafittiWallShortF8.setParent(_scene)
grafittiWallShortF8.addComponentOrReplace(gltfShape4)
const transform117 = new Transform({
  position: new Vector3(12.527766227722168, 0, 33.01313018798828),
  rotation: new Quaternion(2.785434135134466e-14, 0, -4.656886558841657e-16, 1),
  scale: new Vector3(1.5140440464019775, 1, 1.0000052452087402)
})
grafittiWallShortF8.addComponentOrReplace(transform117)

const grafittiWallShortF14 = new Entity('grafittiWallShortF14')
engine.addEntity(grafittiWallShortF14)
grafittiWallShortF14.setParent(_scene)
grafittiWallShortF14.addComponentOrReplace(gltfShape4)
const transform118 = new Transform({
  position: new Vector3(12.527766227722168, 0, 33.01313018798828),
  rotation: new Quaternion(1.9902455334827596e-14, 0.7071068286895752, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(1.5140444040298462, 1, 1.0000053644180298)
})
grafittiWallShortF14.addComponentOrReplace(transform118)

const videoScreenStanding2 = new Entity('videoScreenStanding2')
engine.addEntity(videoScreenStanding2)
videoScreenStanding2.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(25.01273536682129, 1, 37.81553268432617),
  rotation: new Quaternion(-2.0231338821109392e-22, -4.470348358154297e-8, 1.1569431597100409e-14, -1),
  scale: new Vector3(1.1488728523254395, 1, 1)
})
videoScreenStanding2.addComponentOrReplace(transform119)

const grafittiWallShortF15 = new Entity('grafittiWallShortF15')
engine.addEntity(grafittiWallShortF15)
grafittiWallShortF15.setParent(_scene)
grafittiWallShortF15.addComponentOrReplace(gltfShape4)
const transform120 = new Transform({
  position: new Vector3(38.561058044433594, 0, 22.5),
  rotation: new Quaternion(2.785434135134466e-14, 0, -4.656886558841657e-16, 1),
  scale: new Vector3(1.5140440464019775, 1, 1.0000052452087402)
})
grafittiWallShortF15.addComponentOrReplace(transform120)

const grafittiWallI7 = new Entity('grafittiWallI7')
engine.addEntity(grafittiWallI7)
grafittiWallI7.setParent(_scene)
grafittiWallI7.addComponentOrReplace(gltfShape8)
const transform121 = new Transform({
  position: new Vector3(0, 6, 54.5),
  rotation: new Quaternion(-0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(2.250009775161743, 10.837864875793457, 1.0000038146972656)
})
grafittiWallI7.addComponentOrReplace(transform121)

const grafittiWallI8 = new Entity('grafittiWallI8')
engine.addEntity(grafittiWallI8)
grafittiWallI8.setParent(_scene)
grafittiWallI8.addComponentOrReplace(gltfShape8)
const transform122 = new Transform({
  position: new Vector3(0, 12.5, 59.5),
  rotation: new Quaternion(-0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(2.250009775161743, 7.225243091583252, 1.0000038146972656)
})
grafittiWallI8.addComponentOrReplace(transform122)

const stairsFireEscape3 = new Entity('stairsFireEscape3')
engine.addEntity(stairsFireEscape3)
stairsFireEscape3.setParent(_scene)
stairsFireEscape3.addComponentOrReplace(gltfShape40)
const transform123 = new Transform({
  position: new Vector3(7.5, 5.9991302490234375, 50.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0816283226013184, 1.6036646366119385, 1.499999761581421)
})
stairsFireEscape3.addComponentOrReplace(transform123)

const stairsFireEscape4 = new Entity('stairsFireEscape4')
engine.addEntity(stairsFireEscape4)
stairsFireEscape4.setParent(_scene)
stairsFireEscape4.addComponentOrReplace(gltfShape40)
const transform124 = new Transform({
  position: new Vector3(20.89217758178711, 0, 54.48313522338867),
  rotation: new Quaternion(7.777354877735315e-16, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(0.9999999403953552, 1.4820572137832642, 1.499999761581421)
})
stairsFireEscape4.addComponentOrReplace(transform124)

const grafittiWallI9 = new Entity('grafittiWallI9')
engine.addEntity(grafittiWallI9)
grafittiWallI9.setParent(_scene)
grafittiWallI9.addComponentOrReplace(gltfShape8)
const transform125 = new Transform({
  position: new Vector3(27.5, 12.5, 59.5),
  rotation: new Quaternion(-0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(2.250009775161743, 7.225243091583252, 1.0000038146972656)
})
grafittiWallI9.addComponentOrReplace(transform125)

const highBuilding3 = new Entity('highBuilding3')
engine.addEntity(highBuilding3)
highBuilding3.setParent(_scene)
highBuilding3.addComponentOrReplace(gltfShape39)
const transform126 = new Transform({
  position: new Vector3(55, 0, 6.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.875002384185791, 1, 2.096235990524292)
})
highBuilding3.addComponentOrReplace(transform126)

const highBuilding4 = new Entity('highBuilding4')
engine.addEntity(highBuilding4)
highBuilding4.setParent(_scene)
highBuilding4.addComponentOrReplace(gltfShape39)
const transform127 = new Transform({
  position: new Vector3(56.5, 12.510622024536133, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 0.6736714839935303, 1)
})
highBuilding4.addComponentOrReplace(transform127)

const grafittiWallI10 = new Entity('grafittiWallI10')
engine.addEntity(grafittiWallI10)
grafittiWallI10.setParent(_scene)
grafittiWallI10.addComponentOrReplace(gltfShape8)
const transform128 = new Transform({
  position: new Vector3(38.5, 12.5, 26),
  rotation: new Quaternion(2.2399026607465404e-16, -0.70710688829422, -0.7071067690849304, 5.960464477539063e-8),
  scale: new Vector3(3.3750171661376953, 7.225249767303467, 1.0000046491622925)
})
grafittiWallI10.addComponentOrReplace(transform128)

const spotlight2 = new Entity('spotlight2')
engine.addEntity(spotlight2)
spotlight2.setParent(_scene)
spotlight2.addComponentOrReplace(gltfShape37)
const transform129 = new Transform({
  position: new Vector3(30, 5.5, 36.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spotlight2.addComponentOrReplace(transform129)

const buildingDecor = new Entity('buildingDecor')
engine.addEntity(buildingDecor)
buildingDecor.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(36.5, 6, 23),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0417064428329468, 1.000002145767212, 1)
})
buildingDecor.addComponentOrReplace(transform130)
const gltfShape41 = new GLTFShape("models/Building_Decor_02.glb")
gltfShape41.withCollisions = true
gltfShape41.isPointerBlocker = true
gltfShape41.visible = true
buildingDecor.addComponentOrReplace(gltfShape41)

const buildingDecor2 = new Entity('buildingDecor2')
engine.addEntity(buildingDecor2)
buildingDecor2.setParent(_scene)
buildingDecor2.addComponentOrReplace(gltfShape41)
const transform131 = new Transform({
  position: new Vector3(48, 6, 23),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.041706919670105, 1.0000026226043701, 1)
})
buildingDecor2.addComponentOrReplace(transform131)

const grafittiWallShortF16 = new Entity('grafittiWallShortF16')
engine.addEntity(grafittiWallShortF16)
grafittiWallShortF16.setParent(_scene)
grafittiWallShortF16.addComponentOrReplace(gltfShape4)
const transform132 = new Transform({
  position: new Vector3(49.5, 0, 22.5),
  rotation: new Quaternion(2.927801145920011e-15, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(1.5140409469604492, 1, 1.0000033378601074)
})
grafittiWallShortF16.addComponentOrReplace(transform132)

const lightDecor2 = new Entity('lightDecor2')
engine.addEntity(lightDecor2)
lightDecor2.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(55, 7, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.38607656955719, 1, 1.1624724864959717)
})
lightDecor2.addComponentOrReplace(transform133)
const gltfShape42 = new GLTFShape("models/Light_Decor9.glb")
gltfShape42.withCollisions = true
gltfShape42.isPointerBlocker = true
gltfShape42.visible = true
lightDecor2.addComponentOrReplace(gltfShape42)

const lightDecor3 = new Entity('lightDecor3')
engine.addEntity(lightDecor3)
lightDecor3.setParent(_scene)
lightDecor3.addComponentOrReplace(gltfShape35)
const transform134 = new Transform({
  position: new Vector3(55.108116149902344, 14.468036651611328, 11.345965385437012),
  rotation: new Quaternion(2.2553427902376535e-14, 0.00676688551902771, -8.066565748698906e-10, -0.9999771118164062),
  scale: new Vector3(2.184145450592041, 0.5913755297660828, 1.0023720264434814)
})
lightDecor3.addComponentOrReplace(transform134)

const grafittiWallI11 = new Entity('grafittiWallI11')
engine.addEntity(grafittiWallI11)
grafittiWallI11.setParent(_scene)
grafittiWallI11.addComponentOrReplace(gltfShape8)
const transform135 = new Transform({
  position: new Vector3(0, 12.5, 0),
  rotation: new Quaternion(2.2399026607465404e-16, -0.70710688829422, -0.7071067690849304, 5.960464477539063e-8),
  scale: new Vector3(3.3750197887420654, 7.98808479309082, 1.0000053644180298)
})
grafittiWallI11.addComponentOrReplace(transform135)

const grafittiWallI12 = new Entity('grafittiWallI12')
engine.addEntity(grafittiWallI12)
grafittiWallI12.setParent(_scene)
grafittiWallI12.addComponentOrReplace(gltfShape8)
const transform136 = new Transform({
  position: new Vector3(0, 12.5, 24),
  rotation: new Quaternion(2.2399026607465404e-16, -0.70710688829422, -0.7071067690849304, 5.960464477539063e-8),
  scale: new Vector3(1.7212599515914917, 7.225253105163574, 1.0000051259994507)
})
grafittiWallI12.addComponentOrReplace(transform136)

const buildingDecor3 = new Entity('buildingDecor3')
engine.addEntity(buildingDecor3)
buildingDecor3.setParent(_scene)
buildingDecor3.addComponentOrReplace(gltfShape41)
const transform137 = new Transform({
  position: new Vector3(34.5, 6, 8.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0417078733444214, 1.0000035762786865, 1)
})
buildingDecor3.addComponentOrReplace(transform137)

const buildingDecor4 = new Entity('buildingDecor4')
engine.addEntity(buildingDecor4)
buildingDecor4.setParent(_scene)
buildingDecor4.addComponentOrReplace(gltfShape41)
const transform138 = new Transform({
  position: new Vector3(59, 6, 23),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0417073965072632, 1.0000030994415283, 1)
})
buildingDecor4.addComponentOrReplace(transform138)

const buildingDecor5 = new Entity('buildingDecor5')
engine.addEntity(buildingDecor5)
buildingDecor5.setParent(_scene)
buildingDecor5.addComponentOrReplace(gltfShape41)
const transform139 = new Transform({
  position: new Vector3(36.39929962158203, 6, 52.77326202392578),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0417073965072632, 1.0000030994415283, 1)
})
buildingDecor5.addComponentOrReplace(transform139)

const buildingDecor6 = new Entity('buildingDecor6')
engine.addEntity(buildingDecor6)
buildingDecor6.setParent(_scene)
buildingDecor6.addComponentOrReplace(gltfShape41)
const transform140 = new Transform({
  position: new Vector3(0, 6, 51.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0417076349258423, 1.0000033378601074, 1)
})
buildingDecor6.addComponentOrReplace(transform140)

const lightDecor4 = new Entity('lightDecor4')
engine.addEntity(lightDecor4)
lightDecor4.setParent(_scene)
lightDecor4.addComponentOrReplace(gltfShape42)
const transform141 = new Transform({
  position: new Vector3(59.523441314697266, 16, 56.49104690551758),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8377351760864258, 1, 1.2867070436477661)
})
lightDecor4.addComponentOrReplace(transform141)

const lightDecor5 = new Entity('lightDecor5')
engine.addEntity(lightDecor5)
lightDecor5.setParent(_scene)
lightDecor5.addComponentOrReplace(gltfShape42)
const transform142 = new Transform({
  position: new Vector3(59.523441314697266, 7, 56.49104690551758),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8377351760864258, 1, 1.2867070436477661)
})
lightDecor5.addComponentOrReplace(transform142)

const lightDecor6 = new Entity('lightDecor6')
engine.addEntity(lightDecor6)
lightDecor6.setParent(_scene)
lightDecor6.addComponentOrReplace(gltfShape42)
const transform143 = new Transform({
  position: new Vector3(59.523441314697266, 27, 56.49104690551758),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8377351760864258, 1, 1.2867070436477661)
})
lightDecor6.addComponentOrReplace(transform143)

const buildingDecor7 = new Entity('buildingDecor7')
engine.addEntity(buildingDecor7)
buildingDecor7.setParent(_scene)
buildingDecor7.addComponentOrReplace(gltfShape41)
const transform144 = new Transform({
  position: new Vector3(0.5, 6, 1),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0417078733444214, 1.0000035762786865, 0.8018264174461365)
})
buildingDecor7.addComponentOrReplace(transform144)

const buildingDecor8 = new Entity('buildingDecor8')
engine.addEntity(buildingDecor8)
buildingDecor8.setParent(_scene)
buildingDecor8.addComponentOrReplace(gltfShape41)
const transform145 = new Transform({
  position: new Vector3(0, 6, 14.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0417078733444214, 1.0000035762786865, 1)
})
buildingDecor8.addComponentOrReplace(transform145)

const grafittiWallI2 = new Entity('grafittiWallI2')
engine.addEntity(grafittiWallI2)
grafittiWallI2.setParent(_scene)
grafittiWallI2.addComponentOrReplace(gltfShape8)
const transform146 = new Transform({
  position: new Vector3(0.057731494307518005, 0, 18.164491653442383),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(-1.0000030994415283, 1.5, 0.11728953570127487)
})
grafittiWallI2.addComponentOrReplace(transform146)

const grafittiWallJ6 = new Entity('grafittiWallJ6')
engine.addEntity(grafittiWallJ6)
grafittiWallJ6.setParent(_scene)
grafittiWallJ6.addComponentOrReplace(gltfShape7)
const transform147 = new Transform({
  position: new Vector3(0, 0, 63.83840560913086),
  rotation: new Quaternion(-3.2607767855074915e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.4784200191497803, 3.1497976779937744, 0.15057726204395294)
})
grafittiWallJ6.addComponentOrReplace(transform147)

const buildingDecor9 = new Entity('buildingDecor9')
engine.addEntity(buildingDecor9)
buildingDecor9.setParent(_scene)
buildingDecor9.addComponentOrReplace(gltfShape41)
const transform148 = new Transform({
  position: new Vector3(12, 6, 28),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.041707158088684, 1.0000028610229492, 1)
})
buildingDecor9.addComponentOrReplace(transform148)

const toolbox2 = new Entity('toolbox2')
engine.addEntity(toolbox2)
toolbox2.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(21.5, 1, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toolbox2.addComponentOrReplace(transform149)

const invisibleWall = new Entity('invisibleWall')
engine.addEntity(invisibleWall)
invisibleWall.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(6, 4.3062238693237305, 19.10704231262207),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.75, 0.5, 9)
})
invisibleWall.addComponentOrReplace(transform150)

const grafittiWallShortC13 = new Entity('grafittiWallShortC13')
engine.addEntity(grafittiWallShortC13)
grafittiWallShortC13.setParent(_scene)
grafittiWallShortC13.addComponentOrReplace(gltfShape5)
const transform151 = new Transform({
  position: new Vector3(0.0616103857755661, 12.5, 22.595094680786133),
  rotation: new Quaternion(1.7964650627548887e-14, -0.7071068286895752, 8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(5.667235374450684, 6.04772424697876, 0.01329736690968275)
})
grafittiWallShortC13.addComponentOrReplace(transform151)

const grafittiWallShortC14 = new Entity('grafittiWallShortC14')
engine.addEntity(grafittiWallShortC14)
grafittiWallShortC14.setParent(_scene)
grafittiWallShortC14.addComponentOrReplace(gltfShape5)
const transform152 = new Transform({
  position: new Vector3(0.060068026185035706, 12.5, 27.909866333007812),
  rotation: new Quaternion(-2.4667913518057125e-14, -0.7071068286895752, 8.429367426288081e-8, -0.7071068286895752),
  scale: new Vector3(-2.9341366291046143, 4.531857013702393, 0.0220741368830204)
})
grafittiWallShortC14.addComponentOrReplace(transform152)

const grafittiWallI13 = new Entity('grafittiWallI13')
engine.addEntity(grafittiWallI13)
grafittiWallI13.setParent(_scene)
grafittiWallI13.addComponentOrReplace(gltfShape8)
const transform153 = new Transform({
  position: new Vector3(0, 12.500000953674316, 35.5),
  rotation: new Quaternion(1.7964650627548887e-14, -0.7071068286895752, 8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1.5, 0.12109141796827316)
})
grafittiWallI13.addComponentOrReplace(transform153)

const grafittiWallI14 = new Entity('grafittiWallI14')
engine.addEntity(grafittiWallI14)
grafittiWallI14.setParent(_scene)
grafittiWallI14.addComponentOrReplace(gltfShape8)
const transform154 = new Transform({
  position: new Vector3(0.07838653028011322, 12.500001907348633, 31.530942916870117),
  rotation: new Quaternion(-2.4667913518057125e-14, -0.7071068286895752, 8.429367426288081e-8, -0.7071068286895752),
  scale: new Vector3(-1.0000042915344238, 1.5, 0.11728968471288681)
})
grafittiWallI14.addComponentOrReplace(transform154)

const grafittiWallI15 = new Entity('grafittiWallI15')
engine.addEntity(grafittiWallI15)
grafittiWallI15.setParent(_scene)
grafittiWallI15.addComponentOrReplace(gltfShape8)
const transform155 = new Transform({
  position: new Vector3(0.30868101119995117, 12.5, 41.60065460205078),
  rotation: new Quaternion(-0.5000000596046448, 0.4999999403953552, -0.5, 0.5),
  scale: new Vector3(1.5000035762786865, 1.5598058700561523, 1.0000022649765015)
})
grafittiWallI15.addComponentOrReplace(transform155)

const grafittiWallJ7 = new Entity('grafittiWallJ7')
engine.addEntity(grafittiWallJ7)
grafittiWallJ7.setParent(_scene)
grafittiWallJ7.addComponentOrReplace(gltfShape7)
const transform156 = new Transform({
  position: new Vector3(0, 12.5, 47.5),
  rotation: new Quaternion(-3.2607767855074915e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.5000044107437134, 1.5, 0.15057717263698578)
})
grafittiWallJ7.addComponentOrReplace(transform156)

const grafittiWallI16 = new Entity('grafittiWallI16')
engine.addEntity(grafittiWallI16)
grafittiWallI16.setParent(_scene)
grafittiWallI16.addComponentOrReplace(gltfShape8)
const transform157 = new Transform({
  position: new Vector3(0.25, 0.07929372787475586, 48.5),
  rotation: new Quaternion(-0.4999999403953552, 0.5000000596046448, 0.5, -0.5),
  scale: new Vector3(1.5000035762786865, 1.5000004768371582, 0.03003641590476036)
})
grafittiWallI16.addComponentOrReplace(transform157)

const grafittiWallJ8 = new Entity('grafittiWallJ8')
engine.addEntity(grafittiWallJ8)
grafittiWallJ8.setParent(_scene)
grafittiWallJ8.addComponentOrReplace(gltfShape7)
const transform158 = new Transform({
  position: new Vector3(0.11631958186626434, 0.07929229736328125, 42.68667221069336),
  rotation: new Quaternion(-1.8200798331045702e-14, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000090599060059, 1.5, 0.1505773812532425)
})
grafittiWallJ8.addComponentOrReplace(transform158)

const grafittiWallShortC15 = new Entity('grafittiWallShortC15')
engine.addEntity(grafittiWallShortC15)
grafittiWallShortC15.setParent(_scene)
grafittiWallShortC15.addComponentOrReplace(gltfShape5)
const transform159 = new Transform({
  position: new Vector3(63.924095153808594, 12.5, 19.832244873046875),
  rotation: new Quaternion(1.7964650627548887e-14, -0.7071068286895752, 8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(5.667237281799316, 6.04772424697876, 0.013297396712005138)
})
grafittiWallShortC15.addComponentOrReplace(transform159)

const grafittiWallShortC16 = new Entity('grafittiWallShortC16')
engine.addEntity(grafittiWallShortC16)
grafittiWallShortC16.setParent(_scene)
grafittiWallShortC16.addComponentOrReplace(gltfShape5)
const transform160 = new Transform({
  position: new Vector3(63.919681549072266, 12.5, 25.380945205688477),
  rotation: new Quaternion(-2.4667913518057125e-14, -0.7071068286895752, 8.429367426288081e-8, -0.7071068286895752),
  scale: new Vector3(-2.9341378211975098, 4.531857013702393, 0.022074146196246147)
})
grafittiWallShortC16.addComponentOrReplace(transform160)

const grafittiWallI17 = new Entity('grafittiWallI17')
engine.addEntity(grafittiWallI17)
grafittiWallI17.setParent(_scene)
grafittiWallI17.addComponentOrReplace(gltfShape8)
const transform161 = new Transform({
  position: new Vector3(63.449398040771484, 12.500000953674316, 29.243892669677734),
  rotation: new Quaternion(1.7964650627548887e-14, -0.7071068286895752, 8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(1.000003695487976, 1.5, 0.12109153717756271)
})
grafittiWallI17.addComponentOrReplace(transform161)

const grafittiWallI18 = new Entity('grafittiWallI18')
engine.addEntity(grafittiWallI18)
grafittiWallI18.setParent(_scene)
grafittiWallI18.addComponentOrReplace(gltfShape8)
const transform162 = new Transform({
  position: new Vector3(63.49355697631836, 12.500001907348633, 33.167755126953125),
  rotation: new Quaternion(-2.4667913518057125e-14, -0.7071068286895752, 8.429367426288081e-8, -0.7071068286895752),
  scale: new Vector3(-1.000004768371582, 1.5, 0.11728974431753159)
})
grafittiWallI18.addComponentOrReplace(transform162)

const grafittiWallJ11 = new Entity('grafittiWallJ11')
engine.addEntity(grafittiWallJ11)
grafittiWallJ11.setParent(_scene)
grafittiWallJ11.addComponentOrReplace(gltfShape7)
const transform163 = new Transform({
  position: new Vector3(0, 12, 0),
  rotation: new Quaternion(-0.5, -0.49999988079071045, 0.5000000596046448, -0.5000000596046448),
  scale: new Vector3(8.018524169921875, 3.14979887008667, 1.6560345888137817)
})
grafittiWallJ11.addComponentOrReplace(transform163)

const buildingDecor11 = new Entity('buildingDecor11')
engine.addEntity(buildingDecor11)
buildingDecor11.setParent(_scene)
buildingDecor11.addComponentOrReplace(gltfShape41)
const transform164 = new Transform({
  position: new Vector3(10.634753227233887, 16.356889724731445, 46.04718017578125),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.751642107963562, 1.0000107288360596, 0.8018264174461365)
})
buildingDecor11.addComponentOrReplace(transform164)

const grafittiWallShortC17 = new Entity('grafittiWallShortC17')
engine.addEntity(grafittiWallShortC17)
grafittiWallShortC17.setParent(_scene)
grafittiWallShortC17.addComponentOrReplace(gltfShape5)
const transform165 = new Transform({
  position: new Vector3(0, 0, 46),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.242642879486084, 5.256241798400879, 0.0095271747559309)
})
grafittiWallShortC17.addComponentOrReplace(transform165)

const grafittiWallShortC18 = new Entity('grafittiWallShortC18')
engine.addEntity(grafittiWallShortC18)
grafittiWallShortC18.setParent(_scene)
grafittiWallShortC18.addComponentOrReplace(gltfShape5)
const transform166 = new Transform({
  position: new Vector3(49, 0, 30.5),
  rotation: new Quaternion(-4.4253697962257175e-15, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(1.0000050067901611, 1, 1.0000050067901611)
})
grafittiWallShortC18.addComponentOrReplace(transform166)

const imageComputerScreen5 = new Entity('imageComputerScreen5')
engine.addEntity(imageComputerScreen5)
imageComputerScreen5.setParent(_scene)
const transform167 = new Transform({
  position: new Vector3(58.7578125, 1.019269585609436, 27.5),
  rotation: new Quaternion(0.006827346049249172, -0.707073986530304, -0.006827261298894882, 0.7070737481117249),
  scale: new Vector3(1.0000052452087402, 1.0000001192092896, 1.0000056028366089)
})
imageComputerScreen5.addComponentOrReplace(transform167)

const tieredDesk4 = new Entity('tieredDesk4')
engine.addEntity(tieredDesk4)
tieredDesk4.setParent(_scene)
tieredDesk4.addComponentOrReplace(gltfShape31)
const transform168 = new Transform({
  position: new Vector3(59.0557746887207, 0, 27.5),
  rotation: new Quaternion(1.3611905859737226e-14, -0.70710688829422, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.5000067949295044, 1, 1.5000067949295044)
})
tieredDesk4.addComponentOrReplace(transform168)

const shopEmissive2 = new Entity('shopEmissive2')
engine.addEntity(shopEmissive2)
shopEmissive2.setParent(_scene)
shopEmissive2.addComponentOrReplace(gltfShape)
const transform169 = new Transform({
  position: new Vector3(59, 0, 28),
  rotation: new Quaternion(6.506478925652698e-15, -0.70710688829422, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.4115386009216309, 1, 1.0000035762786865)
})
shopEmissive2.addComponentOrReplace(transform169)

const taxiHorizontalPlatform = new Entity('taxiHorizontalPlatform')
engine.addEntity(taxiHorizontalPlatform)
taxiHorizontalPlatform.setParent(_scene)
const transform170 = new Transform({
  position: new Vector3(44.5, 0, 58.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
taxiHorizontalPlatform.addComponentOrReplace(transform170)

const taxiHorizontalPlatform2 = new Entity('taxiHorizontalPlatform2')
engine.addEntity(taxiHorizontalPlatform2)
taxiHorizontalPlatform2.setParent(_scene)
const transform171 = new Transform({
  position: new Vector3(4, 41.168819427490234, 12),
  rotation: new Quaternion(2.6181187006237873e-15, -0.9238795638084412, 1.1013501932666259e-7, 0.3826834559440613),
  scale: new Vector3(1.000004529953003, 1, 1.000004529953003)
})
taxiHorizontalPlatform2.addComponentOrReplace(transform171)

const ropeLight = new Entity('ropeLight')
engine.addEntity(ropeLight)
ropeLight.setParent(_scene)
const transform172 = new Transform({
  position: new Vector3(49.5, 41.168819427490234, 47.5),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(2.5, 4, 3.5)
})
ropeLight.addComponentOrReplace(transform172)

const ropeLight2 = new Entity('ropeLight2')
engine.addEntity(ropeLight2)
ropeLight2.setParent(_scene)
const transform173 = new Transform({
  position: new Vector3(42.5, 41.168819427490234, 53.5),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(2.5, 4, 3.5)
})
ropeLight2.addComponentOrReplace(transform173)

const ropeLight3 = new Entity('ropeLight3')
engine.addEntity(ropeLight3)
ropeLight3.setParent(_scene)
const transform174 = new Transform({
  position: new Vector3(11, 41.168819427490234, 22.5),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(2.5, 4, 3.5)
})
ropeLight3.addComponentOrReplace(transform174)

const ropeLight4 = new Entity('ropeLight4')
engine.addEntity(ropeLight4)
ropeLight4.setParent(_scene)
const transform175 = new Transform({
  position: new Vector3(18, 41.168819427490234, 16.5),
  rotation: new Quaternion(-2.220446049250313e-16, -0.3826834559440613, 4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(2.5, 4, 3.5)
})
ropeLight4.addComponentOrReplace(transform175)

const ropeLight5 = new Entity('ropeLight5')
engine.addEntity(ropeLight5)
ropeLight5.setParent(_scene)
const transform176 = new Transform({
  position: new Vector3(42.750003814697266, 41.168819427490234, 15.75),
  rotation: new Quaternion(-1.579243484607347e-15, -0.9238795638084412, 1.1013501932666259e-7, 0.3826834559440613),
  scale: new Vector3(2.500002145767212, 4, 3.500002861022949)
})
ropeLight5.addComponentOrReplace(transform176)

const ropeLight6 = new Entity('ropeLight6')
engine.addEntity(ropeLight6)
ropeLight6.setParent(_scene)
const transform177 = new Transform({
  position: new Vector3(48.750003814697266, 41.168819427490234, 22.75),
  rotation: new Quaternion(-1.579243484607347e-15, -0.9238795638084412, 1.1013501932666259e-7, 0.3826834559440613),
  scale: new Vector3(2.500002145767212, 4, 3.500002861022949)
})
ropeLight6.addComponentOrReplace(transform177)

const ropeLight7 = new Entity('ropeLight7')
engine.addEntity(ropeLight7)
ropeLight7.setParent(_scene)
const transform178 = new Transform({
  position: new Vector3(18.5, 41.168819427490234, 53.5),
  rotation: new Quaternion(-1.579243484607347e-15, -0.9238795638084412, 1.1013501932666259e-7, 0.3826834559440613),
  scale: new Vector3(2.500002861022949, 4, 3.5000038146972656)
})
ropeLight7.addComponentOrReplace(transform178)

const ropeLight8 = new Entity('ropeLight8')
engine.addEntity(ropeLight8)
ropeLight8.setParent(_scene)
const transform179 = new Transform({
  position: new Vector3(11.749996185302734, 41.168819427490234, 47.25),
  rotation: new Quaternion(-1.579243484607347e-15, -0.9238795638084412, 1.1013501932666259e-7, 0.3826834559440613),
  scale: new Vector3(2.500002145767212, 4, 3.500002861022949)
})
ropeLight8.addComponentOrReplace(transform179)

const taxiHorizontalPlatform3 = new Entity('taxiHorizontalPlatform3')
engine.addEntity(taxiHorizontalPlatform3)
taxiHorizontalPlatform3.setParent(_scene)
const transform180 = new Transform({
  position: new Vector3(7.5, 41.168819427490234, 60.5),
  rotation: new Quaternion(-6.3997934318801245e-15, 0.3826834559440613, -4.5619412247788205e-8, -0.9238795638084412),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
taxiHorizontalPlatform3.addComponentOrReplace(transform180)

const taxiHorizontalPlatform4 = new Entity('taxiHorizontalPlatform4')
engine.addEntity(taxiHorizontalPlatform4)
taxiHorizontalPlatform4.setParent(_scene)
const transform181 = new Transform({
  position: new Vector3(56, 41.168819427490234, 57.5),
  rotation: new Quaternion(2.0664224251545384e-15, -0.3872561752796173, 4.616454774009071e-8, -0.9219722151756287),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
taxiHorizontalPlatform4.addComponentOrReplace(transform181)

const arcadeMachineBlack3 = new Entity('arcadeMachineBlack3')
engine.addEntity(arcadeMachineBlack3)
arcadeMachineBlack3.setParent(_scene)
arcadeMachineBlack3.addComponentOrReplace(gltfShape29)
const transform182 = new Transform({
  position: new Vector3(2.5, 0, 40.5),
  rotation: new Quaternion(-1.930835955463411e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
arcadeMachineBlack3.addComponentOrReplace(transform182)

const sushiBar2 = new Entity('sushiBar2')
engine.addEntity(sushiBar2)
sushiBar2.setParent(_scene)
sushiBar2.addComponentOrReplace(gltfShape2)
const transform183 = new Transform({
  position: new Vector3(53.5, 12.5, 17),
  rotation: new Quaternion(4.783441116216211e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
sushiBar2.addComponentOrReplace(transform183)

const coffeeHouse2 = new Entity('coffeeHouse2')
engine.addEntity(coffeeHouse2)
coffeeHouse2.setParent(_scene)
coffeeHouse2.addComponentOrReplace(gltfShape11)
const transform184 = new Transform({
  position: new Vector3(53.5, 12.500001907348633, 55.5),
  rotation: new Quaternion(-7.362861846095265e-15, 0.7071067690849304, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
coffeeHouse2.addComponentOrReplace(transform184)

const openAndClosedSign5 = new Entity('openAndClosedSign5')
engine.addEntity(openAndClosedSign5)
openAndClosedSign5.setParent(_scene)
const transform185 = new Transform({
  position: new Vector3(51.5296745300293, 15.855386734008789, 19.433324813842773),
  rotation: new Quaternion(9.30873327164715e-16, 2.2351741790771484e-8, -1.1546319456101628e-14, 1),
  scale: new Vector3(1.0000089406967163, 1, 1.0000089406967163)
})
openAndClosedSign5.addComponentOrReplace(transform185)

const bulletinPost4 = new Entity('bulletinPost4')
engine.addEntity(bulletinPost4)
bulletinPost4.setParent(_scene)
bulletinPost4.addComponentOrReplace(gltfShape23)
const transform186 = new Transform({
  position: new Vector3(37.5, 12.5, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bulletinPost4.addComponentOrReplace(transform186)

const shopEmissive3 = new Entity('shopEmissive3')
engine.addEntity(shopEmissive3)
shopEmissive3.setParent(_scene)
shopEmissive3.addComponentOrReplace(gltfShape)
const transform187 = new Transform({
  position: new Vector3(4.242548942565918, 12.5, 7),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000104904174805, 1, 0.9179909825325012)
})
shopEmissive3.addComponentOrReplace(transform187)

const coffeeHouse3 = new Entity('coffeeHouse3')
engine.addEntity(coffeeHouse3)
coffeeHouse3.setParent(_scene)
coffeeHouse3.addComponentOrReplace(gltfShape11)
const transform188 = new Transform({
  position: new Vector3(4.5, 12.5, 24.5),
  rotation: new Quaternion(-1.5014858600494022e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
coffeeHouse3.addComponentOrReplace(transform188)

const umbrellaTable5 = new Entity('umbrellaTable5')
engine.addEntity(umbrellaTable5)
umbrellaTable5.setParent(_scene)
umbrellaTable5.addComponentOrReplace(gltfShape30)
const transform189 = new Transform({
  position: new Vector3(4.5, 12.5, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
umbrellaTable5.addComponentOrReplace(transform189)

const umbrellaTable6 = new Entity('umbrellaTable6')
engine.addEntity(umbrellaTable6)
umbrellaTable6.setParent(_scene)
umbrellaTable6.addComponentOrReplace(gltfShape30)
const transform190 = new Transform({
  position: new Vector3(4.5, 12.5, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
umbrellaTable6.addComponentOrReplace(transform190)

const umbrellaTable7 = new Entity('umbrellaTable7')
engine.addEntity(umbrellaTable7)
umbrellaTable7.setParent(_scene)
umbrellaTable7.addComponentOrReplace(gltfShape30)
const transform191 = new Transform({
  position: new Vector3(48, 12.5, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
umbrellaTable7.addComponentOrReplace(transform191)

const railingStraight3 = new Entity('railingStraight3')
engine.addEntity(railingStraight3)
railingStraight3.setParent(_scene)
const gltfShape43 = new GLTFShape("models/Railing_Straight.glb")
gltfShape43.withCollisions = true
gltfShape43.isPointerBlocker = true
gltfShape43.visible = true
railingStraight3.addComponentOrReplace(gltfShape43)
const transform192 = new Transform({
  position: new Vector3(36, 12.5, 2),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.161220073699951, 1, 1.0000042915344238)
})
railingStraight3.addComponentOrReplace(transform192)

const railingStraight4 = new Entity('railingStraight4')
engine.addEntity(railingStraight4)
railingStraight4.setParent(_scene)
railingStraight4.addComponentOrReplace(gltfShape43)
const transform193 = new Transform({
  position: new Vector3(13.5, 12.5, 0.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.112547874450684, 1, 1.0000042915344238)
})
railingStraight4.addComponentOrReplace(transform193)

const trashGroup3 = new Entity('trashGroup3')
engine.addEntity(trashGroup3)
trashGroup3.setParent(_scene)
trashGroup3.addComponentOrReplace(gltfShape20)
const transform194 = new Transform({
  position: new Vector3(1.4953551292419434, 12.5, 23.852115631103516),
  rotation: new Quaternion(-1.0942621445720273e-16, 0.47139671444892883, -5.619486032060195e-8, -0.8819212913513184),
  scale: new Vector3(1, 1, 1)
})
trashGroup3.addComponentOrReplace(transform194)

const trashGroup4 = new Entity('trashGroup4')
engine.addEntity(trashGroup4)
trashGroup4.setParent(_scene)
trashGroup4.addComponentOrReplace(gltfShape20)
const transform195 = new Transform({
  position: new Vector3(61.25196838378906, 12.5, 4.598797798156738),
  rotation: new Quaternion(-1.4491607438399027e-16, 0.5976225137710571, -7.124214818077235e-8, -0.8017776608467102),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
trashGroup4.addComponentOrReplace(transform195)

const garlandCurve3 = new Entity('garlandCurve3')
engine.addEntity(garlandCurve3)
garlandCurve3.setParent(_scene)
garlandCurve3.addComponentOrReplace(gltfShape36)
const transform196 = new Transform({
  position: new Vector3(6.262426376342773, 16.453115463256836, 16.905498504638672),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.703525185585022, 1, 1.0000030994415283)
})
garlandCurve3.addComponentOrReplace(transform196)

const garlandCurve4 = new Entity('garlandCurve4')
engine.addEntity(garlandCurve4)
garlandCurve4.setParent(_scene)
garlandCurve4.addComponentOrReplace(gltfShape36)
const transform197 = new Transform({
  position: new Vector3(4, 16.453115463256836, 16.905498504638672),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.7035250663757324, 1, 1.0000028610229492)
})
garlandCurve4.addComponentOrReplace(transform197)

const highBuilding5 = new Entity('highBuilding5')
engine.addEntity(highBuilding5)
highBuilding5.setParent(_scene)
highBuilding5.addComponentOrReplace(gltfShape26)
const transform198 = new Transform({
  position: new Vector3(10, 0, 59.44742202758789),
  rotation: new Quaternion(-6.585832572041507e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.5000112056732178, 1, 1.0000016689300537)
})
highBuilding5.addComponentOrReplace(transform198)

const lightDecor7 = new Entity('lightDecor7')
engine.addEntity(lightDecor7)
lightDecor7.setParent(_scene)
lightDecor7.addComponentOrReplace(gltfShape35)
const transform199 = new Transform({
  position: new Vector3(10.606449127197266, 4.5, 55.35136032104492),
  rotation: new Quaternion(-8.71602493142127e-15, 0.9998913407325745, -1.1919630082957156e-7, 0.014744699001312256),
  scale: new Vector3(2.999788284301758, 1, 1.002606987953186)
})
lightDecor7.addComponentOrReplace(transform199)

const lightDecor8 = new Entity('lightDecor8')
engine.addEntity(lightDecor8)
lightDecor8.setParent(_scene)
lightDecor8.addComponentOrReplace(gltfShape35)
const transform200 = new Transform({
  position: new Vector3(10.606449127197266, 0, 62.61861038208008),
  rotation: new Quaternion(-8.71602493142127e-15, 0.9998913407325745, -1.1919630082957156e-7, 0.014744699001312256),
  scale: new Vector3(2.9997873306274414, 1, 1.0026087760925293)
})
lightDecor8.addComponentOrReplace(transform200)

const lightDecor9 = new Entity('lightDecor9')
engine.addEntity(lightDecor9)
lightDecor9.setParent(_scene)
lightDecor9.addComponentOrReplace(gltfShape35)
const transform201 = new Transform({
  position: new Vector3(10.606449127197266, 0, 63.353538513183594),
  rotation: new Quaternion(-8.04858499184151e-15, 0.9999971985816956, -1.1920892006855865e-7, -0.0023984964936971664),
  scale: new Vector3(2.9997916221618652, 1, 1.002610445022583)
})
lightDecor9.addComponentOrReplace(transform201)

const railingStraight6 = new Entity('railingStraight6')
engine.addEntity(railingStraight6)
railingStraight6.setParent(_scene)
railingStraight6.addComponentOrReplace(gltfShape43)
const transform202 = new Transform({
  position: new Vector3(38.5, 12.5, 51),
  rotation: new Quaternion(-2.177062080483132e-15, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(5.641111850738525, 1, 1.0000040531158447)
})
railingStraight6.addComponentOrReplace(transform202)

const railingStraight7 = new Entity('railingStraight7')
engine.addEntity(railingStraight7)
railingStraight7.setParent(_scene)
railingStraight7.addComponentOrReplace(gltfShape43)
const transform203 = new Transform({
  position: new Vector3(39.085575103759766, 12.5, 33.650970458984375),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.354853630065918, 1, 1.0000057220458984)
})
railingStraight7.addComponentOrReplace(transform203)

const railingStraight8 = new Entity('railingStraight8')
engine.addEntity(railingStraight8)
railingStraight8.setParent(_scene)
railingStraight8.addComponentOrReplace(gltfShape43)
const transform204 = new Transform({
  position: new Vector3(7, 12.5, 32),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.6406240463256836, 1, 1.000006914138794)
})
railingStraight8.addComponentOrReplace(transform204)

const invisibleWall2 = new Entity('invisibleWall2')
engine.addEntity(invisibleWall2)
invisibleWall2.setParent(_scene)
const transform205 = new Transform({
  position: new Vector3(24.049991607666016, 11.790185928344727, 25.41602325439453),
  rotation: new Quaternion(-1.101710661142606e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.7500123977661133, 0.5, 23.95033836364746)
})
invisibleWall2.addComponentOrReplace(transform205)

const garlandCurve5 = new Entity('garlandCurve5')
engine.addEntity(garlandCurve5)
garlandCurve5.setParent(_scene)
garlandCurve5.addComponentOrReplace(gltfShape36)
const transform206 = new Transform({
  position: new Vector3(23.995407104492188, 11.437078475952148, 24.277084350585938),
  rotation: new Quaternion(-1.867557935622305e-15, 0, -7.790270012598575e-16, 1),
  scale: new Vector3(1.4576102495193481, 1, 1.0000028610229492)
})
garlandCurve5.addComponentOrReplace(transform206)

const garlandCurve6 = new Entity('garlandCurve6')
engine.addEntity(garlandCurve6)
garlandCurve6.setParent(_scene)
garlandCurve6.addComponentOrReplace(gltfShape36)
const transform207 = new Transform({
  position: new Vector3(23.995407104492188, 11.437078475952148, 26.539512634277344),
  rotation: new Quaternion(-1.867557935622305e-15, 0, -7.790270012598575e-16, 1),
  scale: new Vector3(1.4576104879379272, 1, 1.0000030994415283)
})
garlandCurve6.addComponentOrReplace(transform207)

const invisibleWall3 = new Entity('invisibleWall3')
engine.addEntity(invisibleWall3)
invisibleWall3.setParent(_scene)
const transform208 = new Transform({
  position: new Vector3(24.049991607666016, 11.790185928344727, 9.767802238464355),
  rotation: new Quaternion(-1.101710661142606e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.7500133514404297, 0.5, 23.95034408569336)
})
invisibleWall3.addComponentOrReplace(transform208)

const garlandCurve7 = new Entity('garlandCurve7')
engine.addEntity(garlandCurve7)
garlandCurve7.setParent(_scene)
garlandCurve7.addComponentOrReplace(gltfShape36)
const transform209 = new Transform({
  position: new Vector3(23.995407104492188, 11.437078475952148, 8.628863334655762),
  rotation: new Quaternion(-1.867557935622305e-15, 0, -7.790270012598575e-16, 1),
  scale: new Vector3(1.4576102495193481, 1, 1.0000028610229492)
})
garlandCurve7.addComponentOrReplace(transform209)

const garlandCurve8 = new Entity('garlandCurve8')
engine.addEntity(garlandCurve8)
garlandCurve8.setParent(_scene)
garlandCurve8.addComponentOrReplace(gltfShape36)
const transform210 = new Transform({
  position: new Vector3(23.995407104492188, 11.437078475952148, 10.891291618347168),
  rotation: new Quaternion(-1.867557935622305e-15, 0, -7.790270012598575e-16, 1),
  scale: new Vector3(1.4576104879379272, 1, 1.0000030994415283)
})
garlandCurve8.addComponentOrReplace(transform210)

const railingStraight9 = new Entity('railingStraight9')
engine.addEntity(railingStraight9)
railingStraight9.setParent(_scene)
railingStraight9.addComponentOrReplace(gltfShape43)
const transform211 = new Transform({
  position: new Vector3(52, 12.5, 33),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.354856491088867, 1, 1.0000061988830566)
})
railingStraight9.addComponentOrReplace(transform211)

const sushiBar3 = new Entity('sushiBar3')
engine.addEntity(sushiBar3)
sushiBar3.setParent(_scene)
sushiBar3.addComponentOrReplace(gltfShape2)
const transform212 = new Transform({
  position: new Vector3(34.66415786743164, 0, 59.98271942138672),
  rotation: new Quaternion(-5.254407952032074e-15, 0.7071067690849304, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.1181617975234985, 1, 1.1267246007919312)
})
sushiBar3.addComponentOrReplace(transform212)

const toolbox3 = new Entity('toolbox3')
engine.addEntity(toolbox3)
toolbox3.setParent(_scene)
const transform213 = new Transform({
  position: new Vector3(25, 1, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toolbox3.addComponentOrReplace(transform213)

const grafittiWallI19 = new Entity('grafittiWallI19')
engine.addEntity(grafittiWallI19)
grafittiWallI19.setParent(_scene)
grafittiWallI19.addComponentOrReplace(gltfShape8)
const transform214 = new Transform({
  position: new Vector3(35.5, 12.5, 33.5),
  rotation: new Quaternion(0.5000000596046448, 0.5, 0.4999999403953552, -0.5000001192092896),
  scale: new Vector3(8.049619674682617, 3.454397439956665, 1.0000101327896118)
})
grafittiWallI19.addComponentOrReplace(transform214)

const grafittiWallJ9 = new Entity('grafittiWallJ9')
engine.addEntity(grafittiWallJ9)
grafittiWallJ9.setParent(_scene)
grafittiWallJ9.addComponentOrReplace(gltfShape7)
const transform215 = new Transform({
  position: new Vector3(39.5, 11.95388126373291, 27.5),
  rotation: new Quaternion(0.5, -0.49999988079071045, -0.5000000596046448, -0.5000000596046448),
  scale: new Vector3(8.018524169921875, -2.9730491638183594, 0.19894438982009888)
})
grafittiWallJ9.addComponentOrReplace(transform215)

const grafittiWallJ13 = new Entity('grafittiWallJ13')
engine.addEntity(grafittiWallJ13)
grafittiWallJ13.setParent(_scene)
grafittiWallJ13.addComponentOrReplace(gltfShape7)
const transform216 = new Transform({
  position: new Vector3(35.5, 12, 1.5),
  rotation: new Quaternion(-0.5, -0.49999988079071045, 0.5000000596046448, -0.5000000596046448),
  scale: new Vector3(8.018524169921875, 3.14979887008667, 1.6725949048995972)
})
grafittiWallJ13.addComponentOrReplace(transform216)

const grafittiWallShortC19 = new Entity('grafittiWallShortC19')
engine.addEntity(grafittiWallShortC19)
grafittiWallShortC19.setParent(_scene)
const transform217 = new Transform({
  position: new Vector3(10, 12.5, 58),
  rotation: new Quaternion(0.5000001192092896, 0.5, 0.49999988079071045, -0.5),
  scale: new Vector3(3.429868221282959, 10.432087898254395, 0.48509645462036133)
})
grafittiWallShortC19.addComponentOrReplace(transform217)
grafittiWallShortC19.addComponentOrReplace(gltfShape5)

const grafittiWallShortE5 = new Entity('grafittiWallShortE5')
engine.addEntity(grafittiWallShortE5)
grafittiWallShortE5.setParent(_scene)
const transform218 = new Transform({
  position: new Vector3(51.5, 12.5, 36),
  rotation: new Quaternion(-0.4999999403953552, 0.5000000596046448, 0.5, 0.5),
  scale: new Vector3(11.750614166259766, 5.00000524520874, 1.0000008344650269)
})
grafittiWallShortE5.addComponentOrReplace(transform218)
grafittiWallShortE5.addComponentOrReplace(gltfShape14)

const toolbox4 = new Entity('toolbox4')
engine.addEntity(toolbox4)
toolbox4.setParent(_scene)
const transform219 = new Transform({
  position: new Vector3(28, 1, 36),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toolbox4.addComponentOrReplace(transform219)

const radioCyberpunk2 = new Entity('radioCyberpunk2')
engine.addEntity(radioCyberpunk2)
radioCyberpunk2.setParent(_scene)
const transform220 = new Transform({
  position: new Vector3(30.61129379272461, 0.9512314796447754, 36),
  rotation: new Quaternion(0.7071068286895752, -0.7071068286895752, -1.5278232012860826e-7, -4.7415195325584136e-8),
  scale: new Vector3(2.8089146614074707, 3.000049591064453, 3.3296947479248047)
})
radioCyberpunk2.addComponentOrReplace(transform220)

const mixtable = new Entity('mixtable')
engine.addEntity(mixtable)
mixtable.setParent(_scene)
const transform221 = new Transform({
  position: new Vector3(25, 0, 34.5),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
mixtable.addComponentOrReplace(transform221)

const grafittiWallShortB = new Entity('grafittiWallShortB')
engine.addEntity(grafittiWallShortB)
grafittiWallShortB.setParent(_scene)
const transform222 = new Transform({
  position: new Vector3(31, 0, 38.620357513427734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.999999523162842, 0.5, 5.928643226623535)
})
grafittiWallShortB.addComponentOrReplace(transform222)
const gltfShape44 = new GLTFShape("models/Grafitti_Wall_Short_B.glb")
gltfShape44.withCollisions = true
gltfShape44.isPointerBlocker = true
gltfShape44.visible = true
grafittiWallShortB.addComponentOrReplace(gltfShape44)

const railingStraight10 = new Entity('railingStraight10')
engine.addEntity(railingStraight10)
railingStraight10.setParent(_scene)
railingStraight10.addComponentOrReplace(gltfShape43)
const transform223 = new Transform({
  position: new Vector3(35.466976165771484, 12.5, 33.5),
  rotation: new Quaternion(8.362320913306819e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(0.6881322264671326, 1, 1.0000046491622925)
})
railingStraight10.addComponentOrReplace(transform223)

const railingStraight11 = new Entity('railingStraight11')
engine.addEntity(railingStraight11)
railingStraight11.setParent(_scene)
railingStraight11.addComponentOrReplace(gltfShape43)
const transform224 = new Transform({
  position: new Vector3(7, 12.5, 31.5),
  rotation: new Quaternion(8.362320913306819e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(1.1770793199539185, 1, 1.0000046491622925)
})
railingStraight11.addComponentOrReplace(transform224)

const railingStraight12 = new Entity('railingStraight12')
engine.addEntity(railingStraight12)
railingStraight12.setParent(_scene)
railingStraight12.addComponentOrReplace(gltfShape43)
const transform225 = new Transform({
  position: new Vector3(58.010231018066406, 12.5, 2),
  rotation: new Quaternion(-2.177062080483132e-15, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(4.4051384925842285, 1, 1.0000040531158447)
})
railingStraight12.addComponentOrReplace(transform225)

const railingStraight13 = new Entity('railingStraight13')
engine.addEntity(railingStraight13)
railingStraight13.setParent(_scene)
railingStraight13.addComponentOrReplace(gltfShape43)
const transform226 = new Transform({
  position: new Vector3(13.5, 12.5, 0.5),
  rotation: new Quaternion(-2.177062080483132e-15, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(2.546679973602295, 1, 1.0000039339065552)
})
railingStraight13.addComponentOrReplace(transform226)

const grafittiWallShortA = new Entity('grafittiWallShortA')
engine.addEntity(grafittiWallShortA)
grafittiWallShortA.setParent(_scene)
const transform227 = new Transform({
  position: new Vector3(0.09086644649505615, 12.5, 0.8228564262390137),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.459076404571533, 4.253665924072266, 0.1375136524438858)
})
grafittiWallShortA.addComponentOrReplace(transform227)
const gltfShape45 = new GLTFShape("models/Grafitti_Wall_Short_A.glb")
gltfShape45.withCollisions = true
gltfShape45.isPointerBlocker = true
gltfShape45.visible = true
grafittiWallShortA.addComponentOrReplace(gltfShape45)

const openAndClosedSign6 = new Entity('openAndClosedSign6')
engine.addEntity(openAndClosedSign6)
openAndClosedSign6.setParent(_scene)
const transform228 = new Transform({
  position: new Vector3(7.268203258514404, 14.715316772460938, 3.3977243900299072),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
openAndClosedSign6.addComponentOrReplace(transform228)

const ladder3 = new Entity('ladder3')
engine.addEntity(ladder3)
ladder3.setParent(_scene)
ladder3.addComponentOrReplace(gltfShape15)
const transform229 = new Transform({
  position: new Vector3(0.830473780632019, 11.027518272399902, 1.3551511764526367),
  rotation: new Quaternion(1.4171822589959578e-14, 0.70710688829422, -8.429368847373553e-8, 0.7071067094802856),
  scale: new Vector3(1.496920108795166, 2.6809980869293213, 1.002801537513733)
})
ladder3.addComponentOrReplace(transform229)

const invisibleWall5 = new Entity('invisibleWall5')
engine.addEntity(invisibleWall5)
invisibleWall5.setParent(_scene)
const transform230 = new Transform({
  position: new Vector3(5, 16.806224822998047, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.75, 0.5, 10.525202751159668)
})
invisibleWall5.addComponentOrReplace(transform230)

const stairsFireEscape = new Entity('stairsFireEscape')
engine.addEntity(stairsFireEscape)
stairsFireEscape.setParent(_scene)
stairsFireEscape.addComponentOrReplace(gltfShape40)
const transform231 = new Transform({
  position: new Vector3(8, 0, 59.5),
  rotation: new Quaternion(5.499421231750445e-16, 0.70710688829422, -8.429370268459024e-8, 0.7071067094802856),
  scale: new Vector3(0.9999999403953552, 1.4279496669769287, 1.499999761581421)
})
stairsFireEscape.addComponentOrReplace(transform231)

const grafittiWallI6 = new Entity('grafittiWallI6')
engine.addEntity(grafittiWallI6)
grafittiWallI6.setParent(_scene)
grafittiWallI6.addComponentOrReplace(gltfShape8)
const transform232 = new Transform({
  position: new Vector3(7.981260299682617, 5.759403228759766, 62.5),
  rotation: new Quaternion(-0.5, -0.5, -0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(1.7288615703582764, 2.716223955154419, 1.0000038146972656)
})
grafittiWallI6.addComponentOrReplace(transform232)

const ladder4 = new Entity('ladder4')
engine.addEntity(ladder4)
ladder4.setParent(_scene)
const transform233 = new Transform({
  position: new Vector3(16.733850479125977, 5.169328212738037, 61.07644271850586),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.4542555809020996, 3.3167035579681396, 2.4117279052734375)
})
ladder4.addComponentOrReplace(transform233)
ladder4.addComponentOrReplace(gltfShape15)

const toggleButton = new Entity('toggleButton')
engine.addEntity(toggleButton)
toggleButton.setParent(_scene)
const transform234 = new Transform({
  position: new Vector3(44.345481872558594, 1.5018744468688965, 5.511960506439209),
  rotation: new Quaternion(-0.6532815098762512, 0.27059808373451233, 0.27059808373451233, 0.6532815098762512),
  scale: new Vector3(1.0000001192092896, 1.0000016689300537, 1.0000014305114746)
})
toggleButton.addComponentOrReplace(transform234)

const toggleButton2 = new Entity('toggleButton2')
engine.addEntity(toggleButton2)
toggleButton2.setParent(_scene)
const transform235 = new Transform({
  position: new Vector3(43.63837432861328, 1.0018744468688965, 6.2190680503845215),
  rotation: new Quaternion(-0.6532815098762512, 0.27059808373451233, 0.27059808373451233, 0.6532815098762512),
  scale: new Vector3(1.0000001192092896, 1.0000016689300537, 1.0000014305114746)
})
toggleButton2.addComponentOrReplace(transform235)

const toggleButton3 = new Entity('toggleButton3')
engine.addEntity(toggleButton3)
toggleButton3.setParent(_scene)
const transform236 = new Transform({
  position: new Vector3(42.93126678466797, 2.0018744468688965, 6.926174640655518),
  rotation: new Quaternion(-0.6532815098762512, 0.27059808373451233, 0.27059808373451233, 0.6532815098762512),
  scale: new Vector3(1.0000001192092896, 1.0000016689300537, 1.0000014305114746)
})
toggleButton3.addComponentOrReplace(transform236)

const wallExtractorFan = new Entity('wallExtractorFan')
engine.addEntity(wallExtractorFan)
wallExtractorFan.setParent(_scene)
const transform237 = new Transform({
  position: new Vector3(17.488567352294922, 14.778846740722656, 37.869964599609375),
  rotation: new Quaternion(-0.7071068286895752, 1.9455749640203465e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.25499993562698364, 0.2693932354450226, 0.9623059034347534)
})
wallExtractorFan.addComponentOrReplace(transform237)

const wallExtractorFan3 = new Entity('wallExtractorFan3')
engine.addEntity(wallExtractorFan3)
wallExtractorFan3.setParent(_scene)
const transform238 = new Transform({
  position: new Vector3(33.01913070678711, 14.778846740722656, 37.869964599609375),
  rotation: new Quaternion(-0.7071068286895752, 1.9455749640203465e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.25499993562698364, 0.2693934142589569, 0.9623066186904907)
})
wallExtractorFan3.addComponentOrReplace(transform238)

const imageCubeA4 = new Entity('imageCubeA4')
engine.addEntity(imageCubeA4)
imageCubeA4.setParent(_scene)
const transform239 = new Transform({
  position: new Vector3(33, 0, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 1.5, 2)
})
imageCubeA4.addComponentOrReplace(transform239)

const imageCubeA5 = new Entity('imageCubeA5')
engine.addEntity(imageCubeA5)
imageCubeA5.setParent(_scene)
const transform240 = new Transform({
  position: new Vector3(18.5, 0, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 1.5, 2)
})
imageCubeA5.addComponentOrReplace(transform240)

const railingStraight14 = new Entity('railingStraight14')
engine.addEntity(railingStraight14)
railingStraight14.setParent(_scene)
railingStraight14.addComponentOrReplace(gltfShape43)
const transform241 = new Transform({
  position: new Vector3(56.5, 12.5, 59.5),
  rotation: new Quaternion(-2.177062080483132e-15, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(7.489298343658447, 1, 1.0000040531158447)
})
railingStraight14.addComponentOrReplace(transform241)

const railingStraight16 = new Entity('railingStraight16')
engine.addEntity(railingStraight16)
railingStraight16.setParent(_scene)
railingStraight16.addComponentOrReplace(gltfShape43)
const transform242 = new Transform({
  position: new Vector3(0.5, 12.5, 41),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.640625, 1, 1.000007152557373)
})
railingStraight16.addComponentOrReplace(transform242)

const railingStraight17 = new Entity('railingStraight17')
engine.addEntity(railingStraight17)
railingStraight17.setParent(_scene)
railingStraight17.addComponentOrReplace(gltfShape43)
const transform243 = new Transform({
  position: new Vector3(52, 12.5, 33),
  rotation: new Quaternion(8.362320913306819e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(0.7538286447525024, 1, 1.0000046491622925)
})
railingStraight17.addComponentOrReplace(transform243)

const railingStraight18 = new Entity('railingStraight18')
engine.addEntity(railingStraight18)
railingStraight18.setParent(_scene)
railingStraight18.addComponentOrReplace(gltfShape43)
const transform244 = new Transform({
  position: new Vector3(52, 12.5, 33),
  rotation: new Quaternion(8.362320913306819e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(0.7538286447525024, 1, 1.0000046491622925)
})
railingStraight18.addComponentOrReplace(transform244)

const streetLight = new Entity('streetLight')
engine.addEntity(streetLight)
streetLight.setParent(_scene)
const transform245 = new Transform({
  position: new Vector3(46.81624221801758, 0, 30.265329360961914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.297371745109558, 1.5, 1)
})
streetLight.addComponentOrReplace(transform245)
const gltfShape46 = new GLTFShape("models/Street_Light.glb")
gltfShape46.withCollisions = true
gltfShape46.isPointerBlocker = true
gltfShape46.visible = true
streetLight.addComponentOrReplace(gltfShape46)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform246 = new Transform({
  position: new Vector3(30, 33.71141815185547, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.67031192779541, 5.322834014892578, 18.758468627929688)
})
rainLight.addComponentOrReplace(transform246)

const shopEmissive4 = new Entity('shopEmissive4')
engine.addEntity(shopEmissive4)
shopEmissive4.setParent(_scene)
shopEmissive4.addComponentOrReplace(gltfShape)
const transform247 = new Transform({
  position: new Vector3(60.8702392578125, 23.775249481201172, 41.978694915771484),
  rotation: new Quaternion(-1.1078725081965259e-14, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.000020980834961, 1.1271535158157349, 0.6729056239128113)
})
shopEmissive4.addComponentOrReplace(transform247)

const verticalBlackPad = new Entity('verticalBlackPad')
engine.addEntity(verticalBlackPad)
verticalBlackPad.setParent(_scene)
const transform248 = new Transform({
  position: new Vector3(53.91695785522461, 0, 48.985355377197266),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
verticalBlackPad.addComponentOrReplace(transform248)

const stairsFireEscape6 = new Entity('stairsFireEscape6')
engine.addEntity(stairsFireEscape6)
stairsFireEscape6.setParent(_scene)
stairsFireEscape6.addComponentOrReplace(gltfShape40)
const transform249 = new Transform({
  position: new Vector3(61.101898193359375, 23.289451599121094, 33.196533203125),
  rotation: new Quaternion(-1.2940342563770232e-15, -2.9802318834981634e-8, -3.486712659792209e-15, -1),
  scale: new Vector3(1.000000238418579, 1.8278807401657104, 1.9526206254959106)
})
stairsFireEscape6.addComponentOrReplace(transform249)

const verticalBlackPad2 = new Entity('verticalBlackPad2')
engine.addEntity(verticalBlackPad2)
verticalBlackPad2.setParent(_scene)
const transform250 = new Transform({
  position: new Vector3(56.5, 12.093634605407715, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.25, 1, 2)
})
verticalBlackPad2.addComponentOrReplace(transform250)

const toggleButton4 = new Entity('toggleButton4')
engine.addEntity(toggleButton4)
toggleButton4.setParent(_scene)
const transform251 = new Transform({
  position: new Vector3(58.84501647949219, 14.156636238098145, 30.356826782226562),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1.000002145767212, 1)
})
toggleButton4.addComponentOrReplace(transform251)

const lightDecor10 = new Entity('lightDecor10')
engine.addEntity(lightDecor10)
lightDecor10.setParent(_scene)
lightDecor10.addComponentOrReplace(gltfShape35)
const transform252 = new Transform({
  position: new Vector3(58.84016799926758, 12.696492195129395, 30.548564910888672),
  rotation: new Quaternion(1.6289275785570873e-15, -0.7174559831619263, 8.552738961498108e-8, 0.6966038346290588),
  scale: new Vector3(1.1514126062393188, 0.8262178301811218, 1.0019527673721313)
})
lightDecor10.addComponentOrReplace(transform252)

const toggleButton5 = new Entity('toggleButton5')
engine.addEntity(toggleButton5)
toggleButton5.setParent(_scene)
const transform253 = new Transform({
  position: new Vector3(54.14064025878906, 1.7710342407226562, 46.772342681884766),
  rotation: new Quaternion(0.5000000596046448, 0.5000000596046448, 0.4999999701976776, 0.5000001192092896),
  scale: new Vector3(1.0000046491622925, 1.0000046491622925, 1.0000007152557373)
})
toggleButton5.addComponentOrReplace(transform253)

const lightDecor11 = new Entity('lightDecor11')
engine.addEntity(lightDecor11)
lightDecor11.setParent(_scene)
lightDecor11.addComponentOrReplace(gltfShape42)
const transform254 = new Transform({
  position: new Vector3(56.20051574707031, 16, 30.62502670288086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6265369653701782, 1, 0.6519981622695923)
})
lightDecor11.addComponentOrReplace(transform254)

const lightDecor12 = new Entity('lightDecor12')
engine.addEntity(lightDecor12)
lightDecor12.setParent(_scene)
lightDecor12.addComponentOrReplace(gltfShape42)
const transform255 = new Transform({
  position: new Vector3(56.20051574707031, 27, 30.62502670288086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6265369653701782, 1, 0.6519981622695923)
})
lightDecor12.addComponentOrReplace(transform255)

const highBuilding9 = new Entity('highBuilding9')
engine.addEntity(highBuilding9)
highBuilding9.setParent(_scene)
highBuilding9.addComponentOrReplace(gltfShape26)
const transform256 = new Transform({
  position: new Vector3(52.5, 31.07660484313965, 42),
  rotation: new Quaternion(-1, 0, 0, 1.1920925402364446e-7),
  scale: new Vector3(0.08457044512033463, 0.08373898267745972, 1.0000042915344238)
})
highBuilding9.addComponentOrReplace(transform256)

const railingStraight19 = new Entity('railingStraight19')
engine.addEntity(railingStraight19)
railingStraight19.setParent(_scene)
railingStraight19.addComponentOrReplace(gltfShape43)
const transform257 = new Transform({
  position: new Vector3(53, 23.53390884399414, 33.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.228097915649414, 1, 1.0000083446502686)
})
railingStraight19.addComponentOrReplace(transform257)

const railingStraight20 = new Entity('railingStraight20')
engine.addEntity(railingStraight20)
railingStraight20.setParent(_scene)
railingStraight20.addComponentOrReplace(gltfShape43)
const transform258 = new Transform({
  position: new Vector3(54.5, 31.48653221130371, 28.009965896606445),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.9936935901641846, 1, 1.000009536743164)
})
railingStraight20.addComponentOrReplace(transform258)

const railingStraight21 = new Entity('railingStraight21')
engine.addEntity(railingStraight21)
railingStraight21.setParent(_scene)
railingStraight21.addComponentOrReplace(gltfShape43)
const transform259 = new Transform({
  position: new Vector3(35.75730514526367, 6, 46),
  rotation: new Quaternion(-2.177062080483132e-15, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(6.973118782043457, 1, 1.0000040531158447)
})
railingStraight21.addComponentOrReplace(transform259)

const railingStraight23 = new Entity('railingStraight23')
engine.addEntity(railingStraight23)
railingStraight23.setParent(_scene)
railingStraight23.addComponentOrReplace(gltfShape43)
const transform260 = new Transform({
  position: new Vector3(43.5, 6, 54.5),
  rotation: new Quaternion(-2.177062080483132e-15, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(4.406881809234619, 1, 1.0000040531158447)
})
railingStraight23.addComponentOrReplace(transform260)

const railingStraight24 = new Entity('railingStraight24')
engine.addEntity(railingStraight24)
railingStraight24.setParent(_scene)
railingStraight24.addComponentOrReplace(gltfShape43)
const transform261 = new Transform({
  position: new Vector3(18, 6, 54.5),
  rotation: new Quaternion(-2.177062080483132e-15, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(3.517862319946289, 1, 1.0000040531158447)
})
railingStraight24.addComponentOrReplace(transform261)

const radioCyberpunk3 = new Entity('radioCyberpunk3')
engine.addEntity(radioCyberpunk3)
radioCyberpunk3.setParent(_scene)
const transform262 = new Transform({
  position: new Vector3(27.492755889892578, 1.9928929805755615, 35.8720817565918),
  rotation: new Quaternion(1, -8.363949757664389e-15, -1.1920928244535389e-7, -2.2351743567128324e-8),
  scale: new Vector3(1.4018115997314453, 2.0654830932617188, 2.0023305416107178)
})
radioCyberpunk3.addComponentOrReplace(transform262)

const radioCyberpunk4 = new Entity('radioCyberpunk4')
engine.addEntity(radioCyberpunk4)
radioCyberpunk4.setParent(_scene)
const transform263 = new Transform({
  position: new Vector3(27.507246017456055, 0.9538013935089111, 38.12791442871094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4018115997314453, 2.0120859146118164, 2.0023305416107178)
})
radioCyberpunk4.addComponentOrReplace(transform263)

const radioCyberpunk5 = new Entity('radioCyberpunk5')
engine.addEntity(radioCyberpunk5)
radioCyberpunk5.setParent(_scene)
const transform264 = new Transform({
  position: new Vector3(23.992755889892578, 1.9928932189941406, 35.8720817565918),
  rotation: new Quaternion(1, -8.363949757664389e-15, -1.1920928244535389e-7, -2.2351743567128324e-8),
  scale: new Vector3(1.4018115997314453, 2.0654830932617188, 2.0023305416107178)
})
radioCyberpunk5.addComponentOrReplace(transform264)

const radioCyberpunk6 = new Entity('radioCyberpunk6')
engine.addEntity(radioCyberpunk6)
radioCyberpunk6.setParent(_scene)
const transform265 = new Transform({
  position: new Vector3(24.007246017456055, 0.9538013935089111, 38.12791442871094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4018115997314453, 2.0120859146118164, 2.0023305416107178)
})
radioCyberpunk6.addComponentOrReplace(transform265)

const imageCubeA7 = new Entity('imageCubeA7')
engine.addEntity(imageCubeA7)
imageCubeA7.setParent(_scene)
const transform266 = new Transform({
  position: new Vector3(50.07527542114258, 2.8978183269500732, 23.82347869873047),
  rotation: new Quaternion(4.4645154503528546e-17, 0.1995660960674286, -2.3790130754264283e-8, 0.9798844456672668),
  scale: new Vector3(2.954738140106201, 2.5, 2.917898654937744)
})
imageCubeA7.addComponentOrReplace(transform266)

const imageCubeA9 = new Entity('imageCubeA9')
engine.addEntity(imageCubeA9)
imageCubeA9.setParent(_scene)
const transform267 = new Transform({
  position: new Vector3(14.075273513793945, 2.8978183269500732, 28.765216827392578),
  rotation: new Quaternion(4.4645154503528546e-17, 0.1995660960674286, -2.3790130754264283e-8, 0.9798844456672668),
  scale: new Vector3(2.954738140106201, 2.5, 2.917898654937744)
})
imageCubeA9.addComponentOrReplace(transform267)

const imageCubeB2 = new Entity('imageCubeB2')
engine.addEntity(imageCubeB2)
imageCubeB2.setParent(_scene)
const transform268 = new Transform({
  position: new Vector3(56.5, 4.154691219329834, 34.020469665527344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.569303512573242, 2.5, 2.411832332611084)
})
imageCubeB2.addComponentOrReplace(transform268)

const imageCubeB3 = new Entity('imageCubeB3')
engine.addEntity(imageCubeB3)
imageCubeB3.setParent(_scene)
const transform269 = new Transform({
  position: new Vector3(1, 0, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
imageCubeB3.addComponentOrReplace(transform269)

const imageBillboardBlack = new Entity('imageBillboardBlack')
engine.addEntity(imageBillboardBlack)
imageBillboardBlack.setParent(_scene)
const transform270 = new Transform({
  position: new Vector3(31, 8.122627258300781, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3945913314819336, 1.3231549263000488, 0.9481487274169922)
})
imageBillboardBlack.addComponentOrReplace(transform270)

const imageCubeA3 = new Entity('imageCubeA3')
engine.addEntity(imageCubeA3)
imageCubeA3.setParent(_scene)
const transform271 = new Transform({
  position: new Vector3(38.4687385559082, 2.8978183269500732, 23.5),
  rotation: new Quaternion(4.4645154503528546e-17, 0.1995660960674286, -2.3790130754264283e-8, 0.9798844456672668),
  scale: new Vector3(2.954738140106201, 2.5, 2.917898654937744)
})
imageCubeA3.addComponentOrReplace(transform271)

const imageCubeA6 = new Entity('imageCubeA6')
engine.addEntity(imageCubeA6)
imageCubeA6.setParent(_scene)
const transform272 = new Transform({
  position: new Vector3(38.600704193115234, 2.8978183269500732, 53.226741790771484),
  rotation: new Quaternion(4.4645154503528546e-17, 0.1995660960674286, -2.3790130754264283e-8, 0.9798844456672668),
  scale: new Vector3(2.954738140106201, 2.5, 2.917898654937744)
})
imageCubeA6.addComponentOrReplace(transform272)

const imageCubeB = new Entity('imageCubeB')
engine.addEntity(imageCubeB)
imageCubeB.setParent(_scene)
const transform273 = new Transform({
  position: new Vector3(1.6743583679199219, 3, 15.212451934814453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.2611076831817627, 2.5, 2.095139980316162)
})
imageCubeB.addComponentOrReplace(transform273)

const imageCubeB5 = new Entity('imageCubeB5')
engine.addEntity(imageCubeB5)
imageCubeB5.setParent(_scene)
const transform274 = new Transform({
  position: new Vector3(8.19518756866455, 3, 1.7138389348983765),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.2611076831817627, 2.5, 2.095139980316162)
})
imageCubeB5.addComponentOrReplace(transform274)

const imageCubeB11 = new Entity('imageCubeB11')
engine.addEntity(imageCubeB11)
imageCubeB11.setParent(_scene)
const transform275 = new Transform({
  position: new Vector3(35.23442077636719, 14.667140007019043, 38.35152053833008),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.569303512573242, 2.5, 3.710120677947998)
})
imageCubeB11.addComponentOrReplace(transform275)

const imageCubeB12 = new Entity('imageCubeB12')
engine.addEntity(imageCubeB12)
imageCubeB12.setParent(_scene)
const transform276 = new Transform({
  position: new Vector3(16.734420776367188, 14.667140007019043, 38.35152053833008),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.569303512573242, 2.5, 3.710120677947998)
})
imageCubeB12.addComponentOrReplace(transform276)

const imageCubeB13 = new Entity('imageCubeB13')
engine.addEntity(imageCubeB13)
imageCubeB13.setParent(_scene)
const transform277 = new Transform({
  position: new Vector3(60.639671325683594, 4.154691219329834, 23.907896041870117),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.569303512573242, 2.5, 2.411832332611084)
})
imageCubeB13.addComponentOrReplace(transform277)

const imageCubeB15 = new Entity('imageCubeB15')
engine.addEntity(imageCubeB15)
imageCubeB15.setParent(_scene)
const transform278 = new Transform({
  position: new Vector3(36.28099060058594, 4.154691219329834, 9.647327423095703),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.569303512573242, 2.5, 2.411832332611084)
})
imageCubeB15.addComponentOrReplace(transform278)

const imageCubeB16 = new Entity('imageCubeB16')
engine.addEntity(imageCubeB16)
imageCubeB16.setParent(_scene)
const transform279 = new Transform({
  position: new Vector3(19.195009231567383, 4.154691219329834, 57),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.569303512573242, 2.5, 2.411832332611084)
})
imageCubeB16.addComponentOrReplace(transform279)

const imageCubeB6 = new Entity('imageCubeB6')
engine.addEntity(imageCubeB6)
imageCubeB6.setParent(_scene)
const transform280 = new Transform({
  position: new Vector3(54.13892364501953, 12.499542236328125, 28.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.569302797317505, 6.077023029327393, 7.114296913146973)
})
imageCubeB6.addComponentOrReplace(transform280)

const imageCubeB7 = new Entity('imageCubeB7')
engine.addEntity(imageCubeB7)
imageCubeB7.setParent(_scene)
const transform281 = new Transform({
  position: new Vector3(56.426971435546875, 4.135986328125, 52.5),
  rotation: new Quaternion(1.648883124222983e-14, 0.7071068286895752, -8.429370268459024e-8, 0.7071067094802856),
  scale: new Vector3(14.131146430969238, 8.684616088867188, 1.8332463502883911)
})
imageCubeB7.addComponentOrReplace(transform281)

const imageCubeB8 = new Entity('imageCubeB8')
engine.addEntity(imageCubeB8)
imageCubeB8.setParent(_scene)
const transform282 = new Transform({
  position: new Vector3(49.52204895019531, 0, 11.564838409423828),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.569303512573242, 9.437712669372559, 16.217470169067383)
})
imageCubeB8.addComponentOrReplace(transform282)

const imageCubeB9 = new Entity('imageCubeB9')
engine.addEntity(imageCubeB9)
imageCubeB9.setParent(_scene)
const transform283 = new Transform({
  position: new Vector3(2.7810020446777344, 3.550619125366211, 56),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.569303274154663, 6.769559383392334, 22.62667465209961)
})
imageCubeB9.addComponentOrReplace(transform283)

const imageCubeC = new Entity('imageCubeC')
engine.addEntity(imageCubeC)
imageCubeC.setParent(_scene)
const transform284 = new Transform({
  position: new Vector3(32.5, 15.108285903930664, 35.769954681396484),
  rotation: new Quaternion(-9.800675184335871e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(4.492833137512207, 10.5, 23.02570152282715)
})
imageCubeC.addComponentOrReplace(transform284)

const imageCubeC3 = new Entity('imageCubeC3')
engine.addEntity(imageCubeC3)
imageCubeC3.setParent(_scene)
const transform285 = new Transform({
  position: new Vector3(54.67030334472656, 15.108285903930664, 36.5),
  rotation: new Quaternion(-6.709907863979448e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(2.427525281906128, 10.5, 17.167037963867188)
})
imageCubeC3.addComponentOrReplace(transform285)

const imageCubeC4 = new Entity('imageCubeC4')
engine.addEntity(imageCubeC4)
imageCubeC4.setParent(_scene)
const transform286 = new Transform({
  position: new Vector3(0.07217073440551758, 18.183212280273438, 12.793489456176758),
  rotation: new Quaternion(-6.709907863979448e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(0.6249964237213135, 8.14102554321289, 13.602348327636719)
})
imageCubeC4.addComponentOrReplace(transform286)

const imageCubeC5 = new Entity('imageCubeC5')
engine.addEntity(imageCubeC5)
imageCubeC5.setParent(_scene)
const transform287 = new Transform({
  position: new Vector3(17, 20.554000854492188, 54),
  rotation: new Quaternion(-9.800675184335871e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(2.4275259971618652, 9.17581558227539, 23.02573013305664)
})
imageCubeC5.addComponentOrReplace(transform287)

const coffeeHouse4 = new Entity('coffeeHouse4')
engine.addEntity(coffeeHouse4)
coffeeHouse4.setParent(_scene)
coffeeHouse4.addComponentOrReplace(gltfShape11)
const transform288 = new Transform({
  position: new Vector3(61.44467544555664, 12.500001907348633, 28.874805450439453),
  rotation: new Quaternion(-7.6705126828675e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(0.9480611085891724, 1, 1.5387665033340454)
})
coffeeHouse4.addComponentOrReplace(transform288)

const streetLight4 = new Entity('streetLight4')
engine.addEntity(streetLight4)
streetLight4.setParent(_scene)
streetLight4.addComponentOrReplace(gltfShape46)
const transform289 = new Transform({
  position: new Vector3(61.078216552734375, 0, 13.679574012756348),
  rotation: new Quaternion(2.852637136246559e-15, -0.7071067094802856, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.2973707914352417, 1.5, 0.9999995231628418)
})
streetLight4.addComponentOrReplace(transform289)

const streetLight6 = new Entity('streetLight6')
engine.addEntity(streetLight6)
streetLight6.setParent(_scene)
streetLight6.addComponentOrReplace(gltfShape46)
const transform290 = new Transform({
  position: new Vector3(40.078216552734375, 0, 13.679574012756348),
  rotation: new Quaternion(2.852637136246559e-15, -0.7071067094802856, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.2973687648773193, 1.5, 0.9999990463256836)
})
streetLight6.addComponentOrReplace(transform290)

const streetLight7 = new Entity('streetLight7')
engine.addEntity(streetLight7)
streetLight7.setParent(_scene)
streetLight7.addComponentOrReplace(gltfShape46)
const transform291 = new Transform({
  position: new Vector3(19.816566467285156, 4.3282815909151395e-7, 13.679574012756348),
  rotation: new Quaternion(2.852637136246559e-15, -0.7071067094802856, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.2973681688308716, 1.5, 0.9999990463256836)
})
streetLight7.addComponentOrReplace(transform291)

const stadiumLight2 = new Entity('stadiumLight2')
engine.addEntity(stadiumLight2)
stadiumLight2.setParent(_scene)
const gltfShape47 = new GLTFShape("models/Stadium_Light.glb")
gltfShape47.withCollisions = true
gltfShape47.isPointerBlocker = true
gltfShape47.visible = true
stadiumLight2.addComponentOrReplace(gltfShape47)
const transform292 = new Transform({
  position: new Vector3(2, 0, 42.5),
  rotation: new Quaternion(-5.629934715241348e-16, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(1.000001072883606, 1, 1.000001072883606)
})
stadiumLight2.addComponentOrReplace(transform292)

const barBlack2 = new Entity('barBlack2')
engine.addEntity(barBlack2)
barBlack2.setParent(_scene)
barBlack2.addComponentOrReplace(gltfShape28)
const transform293 = new Transform({
  position: new Vector3(61.10271453857422, 24, 44.61907958984375),
  rotation: new Quaternion(2.275200588301436e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.0000046491622925, 1, 1.0000046491622925)
})
barBlack2.addComponentOrReplace(transform293)

const imageCubeC8 = new Entity('imageCubeC8')
engine.addEntity(imageCubeC8)
imageCubeC8.setParent(_scene)
const transform294 = new Transform({
  position: new Vector3(63.6999397277832, 23.19145393371582, 36.380924224853516),
  rotation: new Quaternion(-6.709907863979448e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(0.45255136489868164, 10.5, 17.167037963867188)
})
imageCubeC8.addComponentOrReplace(transform294)

const imageCubeC9 = new Entity('imageCubeC9')
engine.addEntity(imageCubeC9)
imageCubeC9.setParent(_scene)
const transform295 = new Transform({
  position: new Vector3(58.828773498535156, 23.377384185791016, 43.3624267578125),
  rotation: new Quaternion(-6.709907863979448e-15, -1, 1.1920926823449918e-7, 0),
  scale: new Vector3(0.45255136489868164, 9.305774688720703, 5.494057655334473)
})
imageCubeC9.addComponentOrReplace(transform295)

const fallenLeaves4 = new Entity('fallenLeaves4')
engine.addEntity(fallenLeaves4)
fallenLeaves4.setParent(_scene)
fallenLeaves4.addComponentOrReplace(gltfShape22)
const transform296 = new Transform({
  position: new Vector3(6.5, 0, 36.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fallenLeaves4.addComponentOrReplace(transform296)

const imageCubeB10 = new Entity('imageCubeB10')
engine.addEntity(imageCubeB10)
imageCubeB10.setParent(_scene)
const transform297 = new Transform({
  position: new Vector3(60.3137092590332, 0, 1.994809627532959),
  rotation: new Quaternion(2.5674203905988284e-14, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(18.202571868896484, 9.437712669372559, 1.6728628873825073)
})
imageCubeB10.addComponentOrReplace(transform297)

const imageComputerScreen7 = new Entity('imageComputerScreen7')
engine.addEntity(imageComputerScreen7)
imageComputerScreen7.setParent(_scene)
const transform298 = new Transform({
  position: new Vector3(36.761531829833984, 1.3665093183517456, 57.8508186340332),
  rotation: new Quaternion(0.00923957023769617, -0.9568957686424255, -0.0028026795480400324, 0.29027122259140015),
  scale: new Vector3(1.00001060962677, 1, 1.0000102519989014)
})
imageComputerScreen7.addComponentOrReplace(transform298)

const sushiDisplay3 = new Entity('sushiDisplay3')
engine.addEntity(sushiDisplay3)
sushiDisplay3.setParent(_scene)
sushiDisplay3.addComponentOrReplace(gltfShape19)
const transform299 = new Transform({
  position: new Vector3(31.49114990234375, 0.0070989131927490234, 57.72970199584961),
  rotation: new Quaternion(-8.628326528194348e-15, 0.7071068286895752, -8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(2.559979200363159, 3.375, 2.084634780883789)
})
sushiDisplay3.addComponentOrReplace(transform299)

const explore3 = new Entity('explore3')
engine.addEntity(explore3)
explore3.setParent(_scene)
explore3.addComponentOrReplace(gltfShape32)
const transform300 = new Transform({
  position: new Vector3(36.080970764160156, 4.183753967285156, 0.4927116632461548),
  rotation: new Quaternion(0, 0, 0.103447325527668, 0.9946349859237671),
  scale: new Vector3(0.9999999403953552, 0.9999999403953552, 1)
})
explore3.addComponentOrReplace(transform300)

const pixelCritterF4 = new Entity('pixelCritterF4')
engine.addEntity(pixelCritterF4)
pixelCritterF4.setParent(_scene)
pixelCritterF4.addComponentOrReplace(gltfShape16)
const transform301 = new Transform({
  position: new Vector3(40.674171447753906, 2.0208053588867188, 1.0044770240783691),
  rotation: new Quaternion(0.016067180782556534, -0.07539171725511551, 0.21710270643234253, 0.9731003642082214),
  scale: new Vector3(1.7030915021896362, 1.6653096675872803, 1.0455535650253296)
})
pixelCritterF4.addComponentOrReplace(transform301)

const garlandCurve9 = new Entity('garlandCurve9')
engine.addEntity(garlandCurve9)
garlandCurve9.setParent(_scene)
garlandCurve9.addComponentOrReplace(gltfShape36)
const transform302 = new Transform({
  position: new Vector3(57.11648178100586, 28.90074348449707, 19.422868728637695),
  rotation: new Quaternion(-0.06921635568141937, 0.7037109732627869, -0.06921642273664474, 0.7037109732627869),
  scale: new Vector3(1.0254031419754028, 1, 1.0000052452087402)
})
garlandCurve9.addComponentOrReplace(transform302)

const invisibleWall6 = new Entity('invisibleWall6')
engine.addEntity(invisibleWall6)
invisibleWall6.setParent(_scene)
const transform303 = new Transform({
  position: new Vector3(56, 29.409244537353516, 19.315542221069336),
  rotation: new Quaternion(-0.08411382883787155, 6.929448328492485e-18, 1.0027149777158684e-8, 0.9964562058448792),
  scale: new Vector3(3.75, 0.5010998249053955, 16.50776481628418)
})
invisibleWall6.addComponentOrReplace(transform303)

const garlandCurve10 = new Entity('garlandCurve10')
engine.addEntity(garlandCurve10)
garlandCurve10.setParent(_scene)
garlandCurve10.addComponentOrReplace(gltfShape36)
const transform304 = new Transform({
  position: new Vector3(54.85405349731445, 28.900741577148438, 19.422868728637695),
  rotation: new Quaternion(-0.06921635568141937, 0.7037109732627869, -0.06921642273664474, 0.7037109732627869),
  scale: new Vector3(1.0254030227661133, 1, 1.0000050067901611)
})
garlandCurve10.addComponentOrReplace(transform304)

const coffeeHouse5 = new Entity('coffeeHouse5')
engine.addEntity(coffeeHouse5)
coffeeHouse5.setParent(_scene)
coffeeHouse5.addComponentOrReplace(gltfShape11)
const transform305 = new Transform({
  position: new Vector3(61.45226287841797, 17.33416175842285, 29.836719512939453),
  rotation: new Quaternion(-7.6705126828675e-15, 1, -1.1920928955078125e-7, -5.960464477539063e-8),
  scale: new Vector3(0.9480611085891724, 1, 1.155578374862671)
})
coffeeHouse5.addComponentOrReplace(transform305)

const scoreboard = new Entity('scoreboard')
engine.addEntity(scoreboard)
scoreboard.setParent(_scene)
const transform306 = new Transform({
  position: new Vector3(58.944889068603516, 30.794986724853516, 37.24726867675781),
  rotation: new Quaternion(1.7637824235400236e-15, 0.9908185005187988, -1.1811476952061639e-7, 0.13519896566867828),
  scale: new Vector3(1.0000041723251343, 1, 1.0000041723251343)
})
scoreboard.addComponentOrReplace(transform306)

const policeCar = new Entity('policeCar')
engine.addEntity(policeCar)
policeCar.setParent(_scene)
const transform307 = new Transform({
  position: new Vector3(52.45745086669922, 0, 12.304369926452637),
  rotation: new Quaternion(-1.9570420960602752e-16, -0.09801721572875977, 1.1684562650771113e-8, 0.9951847195625305),
  scale: new Vector3(1.0000017881393433, 1, 1.0000017881393433)
})
policeCar.addComponentOrReplace(transform307)

const tablet = new Entity('tablet')
engine.addEntity(tablet)
tablet.setParent(_scene)
const transform308 = new Transform({
  position: new Vector3(22, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tablet.addComponentOrReplace(transform308)

const yellowAccessCard2 = new Entity('yellowAccessCard2')
engine.addEntity(yellowAccessCard2)
yellowAccessCard2.setParent(_scene)
const transform309 = new Transform({
  position: new Vector3(60.7426872253418, 11.858588218688965, 49.78575897216797),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
yellowAccessCard2.addComponentOrReplace(transform309)

const toolbox5 = new Entity('toolbox5')
engine.addEntity(toolbox5)
toolbox5.setParent(_scene)
const transform310 = new Transform({
  position: new Vector3(3.5, 0, 38.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toolbox5.addComponentOrReplace(transform310)

const silverKey = new Entity('silverKey')
engine.addEntity(silverKey)
silverKey.setParent(_scene)
const transform311 = new Transform({
  position: new Vector3(5.425504207611084, 12.485514640808105, 59.30698776245117),
  rotation: new Quaternion(0, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1, 1, 1)
})
silverKey.addComponentOrReplace(transform311)

const clickArea = new Entity('clickArea')
engine.addEntity(clickArea)
clickArea.setParent(_scene)
const transform312 = new Transform({
  position: new Vector3(25, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.9500675201416016, 1.8301500082015991, 2.209852933883667)
})
clickArea.addComponentOrReplace(transform312)

const blueAccessCard = new Entity('blueAccessCard')
engine.addEntity(blueAccessCard)
blueAccessCard.setParent(_scene)
const transform313 = new Transform({
  position: new Vector3(61.254844665527344, 25.25008773803711, 39.775516510009766),
  rotation: new Quaternion(-1.0404745598046442e-16, -0.17340466380119324, 2.067144677653232e-8, 0.9848507046699524),
  scale: new Vector3(1, 1, 1)
})
blueAccessCard.addComponentOrReplace(transform313)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform314 = new Transform({
  position: new Vector3(12, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5, 7.5, 59.37502670288086)
})
ambientSound.addComponentOrReplace(transform314)

const ambientSound2 = new Entity('ambientSound2')
engine.addEntity(ambientSound2)
ambientSound2.setParent(_scene)
const transform315 = new Transform({
  position: new Vector3(15, 0, 32),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5, 7.5, 59.37502670288086)
})
ambientSound2.addComponentOrReplace(transform315)

const ambientSound3 = new Entity('ambientSound3')
engine.addEntity(ambientSound3)
ambientSound3.setParent(_scene)
const transform316 = new Transform({
  position: new Vector3(29.5, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5, 7.5, 59.37502670288086)
})
ambientSound3.addComponentOrReplace(transform316)

const ambientSound4 = new Entity('ambientSound4')
engine.addEntity(ambientSound4)
ambientSound4.setParent(_scene)
const transform317 = new Transform({
  position: new Vector3(58.5, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5, 7.5, 59.37502670288086)
})
ambientSound4.addComponentOrReplace(transform317)

const ambientSound5 = new Entity('ambientSound5')
engine.addEntity(ambientSound5)
ambientSound5.setParent(_scene)
const transform318 = new Transform({
  position: new Vector3(42, 0, 39.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5, 7.5, 59.37502670288086)
})
ambientSound5.addComponentOrReplace(transform318)

const ambientSound6 = new Entity('ambientSound6')
engine.addEntity(ambientSound6)
ambientSound6.setParent(_scene)
const transform319 = new Transform({
  position: new Vector3(38, 0, 57.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.5, 7.5, 59.37502670288086)
})
ambientSound6.addComponentOrReplace(transform319)

const graffiti = new Entity('graffiti')
engine.addEntity(graffiti)
graffiti.setParent(_scene)
const transform320 = new Transform({
  position: new Vector3(18.912921905517578, 17.5, 59.5),
  rotation: new Quaternion(-1.101710661142606e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000059604644775, 1.5, 1.0000028610229492)
})
graffiti.addComponentOrReplace(transform320)
const gltfShape48 = new GLTFShape("models/Graffiti_01.glb")
gltfShape48.withCollisions = true
gltfShape48.isPointerBlocker = true
gltfShape48.visible = true
graffiti.addComponentOrReplace(gltfShape48)

const graffiti2 = new Entity('graffiti2')
engine.addEntity(graffiti2)
graffiti2.setParent(_scene)
graffiti2.addComponentOrReplace(gltfShape48)
const transform321 = new Transform({
  position: new Vector3(56.736793518066406, 1, 11.29755687713623),
  rotation: new Quaternion(1.867558147380542e-15, -5.960464477539063e-8, 4.6412446131629485e-15, -1),
  scale: new Vector3(0.7500054836273193, 0.75, 1.000004529953003)
})
graffiti2.addComponentOrReplace(transform321)

const graffiti3 = new Entity('graffiti3')
engine.addEntity(graffiti3)
graffiti3.setParent(_scene)
graffiti3.addComponentOrReplace(gltfShape48)
const transform322 = new Transform({
  position: new Vector3(52.060150146484375, 14.589834213256836, 19.418087005615234),
  rotation: new Quaternion(1.867558147380542e-15, -5.960464477539063e-8, 4.6412446131629485e-15, -1),
  scale: new Vector3(0.343839168548584, 0.3764045834541321, 1.000004529953003)
})
graffiti3.addComponentOrReplace(transform322)

const graffiti4 = new Entity('graffiti4')
engine.addEntity(graffiti4)
graffiti4.setParent(_scene)
graffiti4.addComponentOrReplace(gltfShape48)
const transform323 = new Transform({
  position: new Vector3(28.723358154296875, 4.089834213256836, 7.770179271697998),
  rotation: new Quaternion(2.100097490522054e-15, 0.09801708161830902, -1.1684547551737978e-8, -0.9951847195625305),
  scale: new Vector3(0.3438391387462616, 0.3764045834541321, 1.000004529953003)
})
graffiti4.addComponentOrReplace(transform323)

const indicatorArrow = new Entity('indicatorArrow')
engine.addEntity(indicatorArrow)
indicatorArrow.setParent(_scene)
const transform324 = new Transform({
  position: new Vector3(56.5, 3.5, 11.376699447631836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.195253610610962, 1.4917728900909424, 1)
})
indicatorArrow.addComponentOrReplace(transform324)

const clickArea2 = new Entity('clickArea2')
engine.addEntity(clickArea2)
clickArea2.setParent(_scene)
const transform325 = new Transform({
  position: new Vector3(56.5831184387207, 1.1835997104644775, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.749840021133423, 2.4098644256591797, 0.32290029525756836)
})
clickArea2.addComponentOrReplace(transform325)

const graffiti5 = new Entity('graffiti5')
engine.addEntity(graffiti5)
graffiti5.setParent(_scene)
graffiti5.addComponentOrReplace(gltfShape48)
const transform326 = new Transform({
  position: new Vector3(18.53316879272461, 13.595505714416504, 59),
  rotation: new Quaternion(2.4847762329681736e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(0.7500067353248596, 0.75, 1.0000061988830566)
})
graffiti5.addComponentOrReplace(transform326)

const indicatorArrow2 = new Entity('indicatorArrow2')
engine.addEntity(indicatorArrow2)
indicatorArrow2.setParent(_scene)
const transform327 = new Transform({
  position: new Vector3(17.670379638671875, 9.5, 61.37845993041992),
  rotation: new Quaternion(-0.7730104923248291, -5.443002493166205e-9, 0.6343932747840881, 1.3112483543409326e-7),
  scale: new Vector3(2.8759841918945312, 2.6250078678131104, 2.4711287021636963)
})
indicatorArrow2.addComponentOrReplace(transform327)

const spark = new Entity('spark')
engine.addEntity(spark)
spark.setParent(_scene)
const transform328 = new Transform({
  position: new Vector3(5.718273639678955, 11.625134468078613, 59.49649429321289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark.addComponentOrReplace(transform328)

const ladder5 = new Entity('ladder5')
engine.addEntity(ladder5)
ladder5.setParent(_scene)
ladder5.addComponentOrReplace(gltfShape15)
const transform329 = new Transform({
  position: new Vector3(19.415342330932617, 11.785776138305664, 57.683067321777344),
  rotation: new Quaternion(2.8706154105520316e-15, 0.7071068286895752, -8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(1.3393727540969849, 3.864100694656372, 2.411733627319336)
})
ladder5.addComponentOrReplace(transform329)

const ironFenceDoor = new Entity('ironFenceDoor')
engine.addEntity(ironFenceDoor)
ironFenceDoor.setParent(_scene)
const transform330 = new Transform({
  position: new Vector3(18, 0, 3.5),
  rotation: new Quaternion(6.482855997316943e-17, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
ironFenceDoor.addComponentOrReplace(transform330)

const ironFenceDoor2 = new Entity('ironFenceDoor2')
engine.addEntity(ironFenceDoor2)
ironFenceDoor2.setParent(_scene)
const transform331 = new Transform({
  position: new Vector3(51.5, 13.805500030517578, 14.5),
  rotation: new Quaternion(6.482855997316943e-17, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(2.2240703105926514, 1.9643752574920654, 1)
})
ironFenceDoor2.addComponentOrReplace(transform331)

const ironFenceDoor3 = new Entity('ironFenceDoor3')
engine.addEntity(ironFenceDoor3)
ironFenceDoor3.setParent(_scene)
const transform332 = new Transform({
  position: new Vector3(53.250762939453125, 13.805500030517578, 19.521316528320312),
  rotation: new Quaternion(6.509325379871946e-15, -1, 1.1920927533992653e-7, 5.960464477539063e-8),
  scale: new Vector3(1.5574095249176025, 1.9643752574920654, 1.0000001192092896)
})
ironFenceDoor3.addComponentOrReplace(transform332)

const clickArea3 = new Entity('clickArea3')
engine.addEntity(clickArea3)
clickArea3.setParent(_scene)
const transform333 = new Transform({
  position: new Vector3(52, 13.5, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.213357925415039, 3.204742431640625, 7.2323784828186035)
})
clickArea3.addComponentOrReplace(transform333)

const invisibleWall7 = new Entity('invisibleWall7')
engine.addEntity(invisibleWall7)
invisibleWall7.setParent(_scene)
const transform334 = new Transform({
  position: new Vector3(53.495994567871094, 12.5, 17.0405216217041),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.845433712005615, 5, 6.585226058959961)
})
invisibleWall7.addComponentOrReplace(transform334)

const invisibleWall8 = new Entity('invisibleWall8')
engine.addEntity(invisibleWall8)
invisibleWall8.setParent(_scene)
const transform335 = new Transform({
  position: new Vector3(25, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.3466734886169434, 2.206916332244873, 1.6546624898910522)
})
invisibleWall8.addComponentOrReplace(transform335)

const clickArea4 = new Entity('clickArea4')
engine.addEntity(clickArea4)
clickArea4.setParent(_scene)
const transform336 = new Transform({
  position: new Vector3(15.325372695922852, 7.76105260848999, 61.1123161315918),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4329241216182709, 2.4625723361968994, 1)
})
clickArea4.addComponentOrReplace(transform336)

const invisibleWall9 = new Entity('invisibleWall9')
engine.addEntity(invisibleWall9)
invisibleWall9.setParent(_scene)
const transform337 = new Transform({
  position: new Vector3(23.25257682800293, 0, 4.476012706756592),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0459858179092407, 6.694488525390625, 2.79685115814209)
})
invisibleWall9.addComponentOrReplace(transform337)

const clickArea5 = new Entity('clickArea5')
engine.addEntity(clickArea5)
clickArea5.setParent(_scene)
const transform338 = new Transform({
  position: new Vector3(23, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.193907618522644, 1.8301500082015991, 2.209852933883667)
})
clickArea5.addComponentOrReplace(transform338)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform339 = new Transform({
  position: new Vector3(28.71271514892578, 4.267510414123535, 7.762818336486816),
  rotation: new Quaternion(6.939413373331912e-18, -0.08246013522148132, 9.830012359657303e-9, 0.9965944290161133),
  scale: new Vector3(0.9411951303482056, 1.8758161067962646, 0.9832481145858765)
})
plainText.addComponentOrReplace(transform339)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform340 = new Transform({
  position: new Vector3(18.532312393188477, 14.260302543640137, 59.828189849853516),
  rotation: new Quaternion(1.1647749957469436e-14, -0.6963434219360352, 8.301060461235465e-8, 0.7177088260650635),
  scale: new Vector3(0.9412007331848145, 1.8758161067962646, 0.9832550883293152)
})
plainText2.addComponentOrReplace(transform340)

const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform341 = new Transform({
  position: new Vector3(51.697940826416016, 14.773015022277832, 19.42142677307129),
  rotation: new Quaternion(1.4264000950444528e-14, 0.01510769035667181, -1.8009760349713133e-9, 0.9998859167098999),
  scale: new Vector3(0.9412012696266174, 1.8758161067962646, 0.9832558631896973)
})
plainText3.addComponentOrReplace(transform341)

const tieredDesk5 = new Entity('tieredDesk5')
engine.addEntity(tieredDesk5)
tieredDesk5.setParent(_scene)
const transform342 = new Transform({
  position: new Vector3(35, 0, 3),
  rotation: new Quaternion(1.6046414075417646e-14, -0.005877546966075897, 7.006670799114545e-10, -0.9999827742576599),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
tieredDesk5.addComponentOrReplace(transform342)
tieredDesk5.addComponentOrReplace(gltfShape31)

const toggleButton6 = new Entity('toggleButton6')
engine.addEntity(toggleButton6)
toggleButton6.setParent(_scene)
const transform343 = new Transform({
  position: new Vector3(43.6601676940918, 1.4886627197265625, 2.7651307582855225),
  rotation: new Quaternion(0.653836190700531, -0.6538361310958862, -0.2692550718784332, 0.26925504207611084),
  scale: new Vector3(1.0000017881393433, 1.0000033378601074, 1.0000053644180298)
})
toggleButton6.addComponentOrReplace(transform343)

const cableBox20 = new Entity('cableBox20')
engine.addEntity(cableBox20)
cableBox20.setParent(_scene)
const transform344 = new Transform({
  position: new Vector3(34.986000061035156, 1.3078875541687012, 2.9971721172332764),
  rotation: new Quaternion(-6.079712810123407e-15, -1, 1.1920928244535389e-7, 0.00039774179458618164),
  scale: new Vector3(1.0000064373016357, 0.3723440170288086, 1.0000064373016357)
})
cableBox20.addComponentOrReplace(transform344)

const videoComputerScreen = new Entity('videoComputerScreen')
engine.addEntity(videoComputerScreen)
videoComputerScreen.setParent(_scene)
const transform345 = new Transform({
  position: new Vector3(35, 1.0031991004943848, 3.187091827392578),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4164440631866455, 1, 1.0715646743774414)
})
videoComputerScreen.addComponentOrReplace(transform345)

const padlock2 = new Entity('padlock2')
engine.addEntity(padlock2)
padlock2.setParent(_scene)
const transform346 = new Transform({
  position: new Vector3(34.936798095703125, 1.3313276767730713, 2.672693967819214),
  rotation: new Quaternion(-5.654771627078975e-15, -1, 1.1920928244535389e-7, 0.00039774179458618164),
  scale: new Vector3(1.0000046491622925, 1, 0.3166641592979431)
})
padlock2.addComponentOrReplace(transform346)

const keyboard = new Entity('keyboard')
engine.addEntity(keyboard)
keyboard.setParent(_scene)
const transform347 = new Transform({
  position: new Vector3(34.988380432128906, 0.9125573635101318, 3.6597585678100586),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
keyboard.addComponentOrReplace(transform347)

const clickArea6 = new Entity('clickArea6')
engine.addEntity(clickArea6)
clickArea6.setParent(_scene)
const transform348 = new Transform({
  position: new Vector3(34.97066879272461, 0.9292706251144409, 3.4798495769500732),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.2367336750030518, 0.7464075684547424)
})
clickArea6.addComponentOrReplace(transform348)

const invisibleWall10 = new Entity('invisibleWall10')
engine.addEntity(invisibleWall10)
invisibleWall10.setParent(_scene)
const transform349 = new Transform({
  position: new Vector3(35, 0.8195787072181702, 3.5402815341949463),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 0.2263280153274536, 0.49014759063720703)
})
invisibleWall10.addComponentOrReplace(transform349)

const ambientSound7 = new Entity('ambientSound7')
engine.addEntity(ambientSound7)
ambientSound7.setParent(_scene)
const transform350 = new Transform({
  position: new Vector3(35, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound7.addComponentOrReplace(transform350)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
const transform351 = new Transform({
  position: new Vector3(16.328250885009766, 3.992966651916504, 55.992271423339844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.663671016693115, 5.763591766357422, 1)
})
wallPlainBlack.addComponentOrReplace(transform351)
const gltfShape49 = new GLTFShape("models/PlainBlackWall.glb")
gltfShape49.withCollisions = true
gltfShape49.isPointerBlocker = true
gltfShape49.visible = true
wallPlainBlack.addComponentOrReplace(gltfShape49)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
wallPlainBlack2.addComponentOrReplace(gltfShape49)
const transform352 = new Transform({
  position: new Vector3(49.33559036254883, 0.16667461395263672, 1.2794790267944336),
  rotation: new Quaternion(8.434581294037083e-15, 0.7087720036506653, -8.449222121953426e-8, 0.7054376602172852),
  scale: new Vector3(5.32994270324707, 7.421172142028809, 0.9997833371162415)
})
wallPlainBlack2.addComponentOrReplace(transform352)

const wallPlainBlack3 = new Entity('wallPlainBlack3')
engine.addEntity(wallPlainBlack3)
wallPlainBlack3.setParent(_scene)
wallPlainBlack3.addComponentOrReplace(gltfShape49)
const transform353 = new Transform({
  position: new Vector3(56.20573425292969, 3.7886648178100586, 50.953006744384766),
  rotation: new Quaternion(8.682622187146296e-15, 0.7078622579574585, -8.43837710817752e-8, 0.7063505053520203),
  scale: new Vector3(5.61581563949585, 7.004105091094971, 0.999815821647644)
})
wallPlainBlack3.addComponentOrReplace(transform353)

const toggleButton7 = new Entity('toggleButton7')
engine.addEntity(toggleButton7)
toggleButton7.setParent(_scene)
const transform354 = new Transform({
  position: new Vector3(43.89300537109375, 2.768738269805908, 3.401580810546875),
  rotation: new Quaternion(0.653836190700531, -0.6538361310958862, -0.2692550718784332, 0.26925504207611084),
  scale: new Vector3(1.0000017881393433, 1.0000033378601074, 1.0000044107437134)
})
toggleButton7.addComponentOrReplace(transform354)

const wallPlainBlack4 = new Entity('wallPlainBlack4')
engine.addEntity(wallPlainBlack4)
wallPlainBlack4.setParent(_scene)
wallPlainBlack4.addComponentOrReplace(gltfShape49)
const transform355 = new Transform({
  position: new Vector3(58.41330337524414, 12.579190254211426, 27.658689498901367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.336611270904541, 4.823705196380615, 1)
})
wallPlainBlack4.addComponentOrReplace(transform355)

const wallPlainBlack6 = new Entity('wallPlainBlack6')
engine.addEntity(wallPlainBlack6)
wallPlainBlack6.setParent(_scene)
wallPlainBlack6.addComponentOrReplace(gltfShape49)
const transform356 = new Transform({
  position: new Vector3(31.735326766967773, 15.090255737304688, 38.305171966552734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.663671016693115, 1.730133056640625, 7.207733631134033)
})
wallPlainBlack6.addComponentOrReplace(transform356)

const wallPlainBlack7 = new Entity('wallPlainBlack7')
engine.addEntity(wallPlainBlack7)
wallPlainBlack7.setParent(_scene)
wallPlainBlack7.addComponentOrReplace(gltfShape49)
const transform357 = new Transform({
  position: new Vector3(55.35091018676758, 15.319549560546875, 36.00521469116211),
  rotation: new Quaternion(9.34866028719835e-15, 0.7019995450973511, -8.368488124688156e-8, 0.7121774554252625),
  scale: new Vector3(5.790206432342529, 1.7329065799713135, 0.9997876882553101)
})
wallPlainBlack7.addComponentOrReplace(transform357)

const wallPlainBlack8 = new Entity('wallPlainBlack8')
engine.addEntity(wallPlainBlack8)
wallPlainBlack8.setParent(_scene)
wallPlainBlack8.addComponentOrReplace(gltfShape49)
const transform358 = new Transform({
  position: new Vector3(0.3321315050125122, 18.328683853149414, 12.468109130859375),
  rotation: new Quaternion(8.686864975179093e-15, 0.711102306842804, -8.477001500750703e-8, 0.7030885815620422),
  scale: new Vector3(4.640811920166016, 1.3748828172683716, 0.4545457065105438)
})
wallPlainBlack8.addComponentOrReplace(transform358)

const wallPlainBlack9 = new Entity('wallPlainBlack9')
engine.addEntity(wallPlainBlack9)
wallPlainBlack9.setParent(_scene)
wallPlainBlack9.addComponentOrReplace(gltfShape49)
const transform359 = new Transform({
  position: new Vector3(37.863861083984375, 2.224867343902588, 22.47330093383789),
  rotation: new Quaternion(8.244563004847737e-15, 0.7213290929794312, -8.598914291724213e-8, 0.6925925612449646),
  scale: new Vector3(0.5774029493331909, 2.199068546295166, 3.582867383956909)
})
wallPlainBlack9.addComponentOrReplace(transform359)

const wallPlainBlack10 = new Entity('wallPlainBlack10')
engine.addEntity(wallPlainBlack10)
wallPlainBlack10.setParent(_scene)
wallPlainBlack10.addComponentOrReplace(gltfShape49)
const transform360 = new Transform({
  position: new Vector3(49.39434814453125, 2.224867343902588, 22.611183166503906),
  rotation: new Quaternion(8.244563004847737e-15, 0.7213290929794312, -8.598914291724213e-8, 0.6925925612449646),
  scale: new Vector3(0.5206814408302307, 2.199068546295166, 3.3079330921173096)
})
wallPlainBlack10.addComponentOrReplace(transform360)

const wallPlainBlack16 = new Entity('wallPlainBlack16')
engine.addEntity(wallPlainBlack16)
wallPlainBlack16.setParent(_scene)
wallPlainBlack16.addComponentOrReplace(gltfShape49)
const transform361 = new Transform({
  position: new Vector3(60.32240676879883, 0.24886411428451538, 2.0113251209259033),
  rotation: new Quaternion(1.9145599209203883e-14, 0.00042403952102176845, -5.055755467053835e-11, 0.9999999403953552),
  scale: new Vector3(5.790195465087891, 7.421172142028809, 0.9997851848602295)
})
wallPlainBlack16.addComponentOrReplace(transform361)

const toggleButton8 = new Entity('toggleButton8')
engine.addEntity(toggleButton8)
toggleButton8.setParent(_scene)
const transform362 = new Transform({
  position: new Vector3(43.55331802368164, 3.768738031387329, 2.8652496337890625),
  rotation: new Quaternion(0.653836190700531, -0.6538361310958862, -0.2692550718784332, 0.26925504207611084),
  scale: new Vector3(1.0000017881393433, 1.0000028610229492, 1.0000028610229492)
})
toggleButton8.addComponentOrReplace(transform362)

const wallPlainBlack11 = new Entity('wallPlainBlack11')
engine.addEntity(wallPlainBlack11)
wallPlainBlack11.setParent(_scene)
wallPlainBlack11.addComponentOrReplace(gltfShape49)
const transform363 = new Transform({
  position: new Vector3(60.375038146972656, 2.224867343902588, 22.588226318359375),
  rotation: new Quaternion(8.244563004847737e-15, 0.7213290929794312, -8.598914291724213e-8, 0.6925925612449646),
  scale: new Vector3(0.520681619644165, 2.199068546295166, 3.307934045791626)
})
wallPlainBlack11.addComponentOrReplace(transform363)

const wallPlainBlack17 = new Entity('wallPlainBlack17')
engine.addEntity(wallPlainBlack17)
wallPlainBlack17.setParent(_scene)
wallPlainBlack17.addComponentOrReplace(gltfShape49)
const transform364 = new Transform({
  position: new Vector3(7.965177536010742, 2.224867343902588, 0.5988161563873291),
  rotation: new Quaternion(8.244563004847737e-15, 0.7213290929794312, -8.598914291724213e-8, 0.6925925612449646),
  scale: new Vector3(0.520682156085968, 2.199068546295166, 3.307936668395996)
})
wallPlainBlack17.addComponentOrReplace(transform364)

const wallPlainBlack13 = new Entity('wallPlainBlack13')
engine.addEntity(wallPlainBlack13)
wallPlainBlack13.setParent(_scene)
wallPlainBlack13.addComponentOrReplace(gltfShape49)
const transform365 = new Transform({
  position: new Vector3(1.8905937671661377, 2.224867343902588, 0.6437110304832458),
  rotation: new Quaternion(8.244563004847737e-15, 0.7213290929794312, -8.598914291724213e-8, 0.6925925612449646),
  scale: new Vector3(0.5206823348999023, 2.199068546295166, 3.3079376220703125)
})
wallPlainBlack13.addComponentOrReplace(transform365)

const wallPlainBlack14 = new Entity('wallPlainBlack14')
engine.addEntity(wallPlainBlack14)
wallPlainBlack14.setParent(_scene)
wallPlainBlack14.addComponentOrReplace(gltfShape49)
const transform366 = new Transform({
  position: new Vector3(1.357367992401123, 2.224867343902588, 14.133767127990723),
  rotation: new Quaternion(8.244563004847737e-15, 0.7213290929794312, -8.598914291724213e-8, 0.6925925612449646),
  scale: new Vector3(0.520682692527771, 2.199068546295166, 3.3079395294189453)
})
wallPlainBlack14.addComponentOrReplace(transform366)

const toggleButton9 = new Entity('toggleButton9')
engine.addEntity(toggleButton9)
toggleButton9.setParent(_scene)
const transform367 = new Transform({
  position: new Vector3(43.55331802368164, 2.768738031387329, 2.8652496337890625),
  rotation: new Quaternion(0.653836190700531, -0.6538361310958862, -0.2692550718784332, 0.26925504207611084),
  scale: new Vector3(1.0000017881393433, 1.0000028610229492, 1.0000028610229492)
})
toggleButton9.addComponentOrReplace(transform367)

const wallPlainBlack12 = new Entity('wallPlainBlack12')
engine.addEntity(wallPlainBlack12)
wallPlainBlack12.setParent(_scene)
wallPlainBlack12.addComponentOrReplace(gltfShape49)
const transform368 = new Transform({
  position: new Vector3(13.389991760253906, 2.234595775604248, 27.609169006347656),
  rotation: new Quaternion(8.244563004847737e-15, 0.7213290929794312, -8.598914291724213e-8, 0.6925925612449646),
  scale: new Vector3(0.5774036645889282, 2.199068546295166, 3.582872152328491)
})
wallPlainBlack12.addComponentOrReplace(transform368)

const toggleButton10 = new Entity('toggleButton10')
engine.addEntity(toggleButton10)
toggleButton10.setParent(_scene)
const transform369 = new Transform({
  position: new Vector3(44.06865310668945, 3.768738031387329, 3.440176248550415),
  rotation: new Quaternion(0.653836190700531, -0.6538361310958862, -0.2692550718784332, 0.26925504207611084),
  scale: new Vector3(1.0000017881393433, 1.0000029802322388, 1.0000029802322388)
})
toggleButton10.addComponentOrReplace(transform369)

const toggleButton11 = new Entity('toggleButton11')
engine.addEntity(toggleButton11)
toggleButton11.setParent(_scene)
const transform370 = new Transform({
  position: new Vector3(44.49576950073242, 2.768738031387329, 3.982340097427368),
  rotation: new Quaternion(0.653836190700531, -0.6538361310958862, -0.2692550718784332, 0.26925504207611084),
  scale: new Vector3(1.0000017881393433, 1.0000030994415283, 1.0000030994415283)
})
toggleButton11.addComponentOrReplace(transform370)

const toggleButton12 = new Entity('toggleButton12')
engine.addEntity(toggleButton12)
toggleButton12.setParent(_scene)
const transform371 = new Transform({
  position: new Vector3(44.49576950073242, 3.768738269805908, 3.982340097427368),
  rotation: new Quaternion(0.653836190700531, -0.6538361310958862, -0.2692550718784332, 0.26925504207611084),
  scale: new Vector3(1.0000017881393433, 1.0000030994415283, 1.0000030994415283)
})
toggleButton12.addComponentOrReplace(transform371)

const toggleButton13 = new Entity('toggleButton13')
engine.addEntity(toggleButton13)
toggleButton13.setParent(_scene)
const transform372 = new Transform({
  position: new Vector3(43.2012939453125, 3.6991970539093018, 2.3045787811279297),
  rotation: new Quaternion(0.653836190700531, -0.6538361310958862, -0.2692550718784332, 0.26925504207611084),
  scale: new Vector3(1.0000017881393433, 1.0000033378601074, 1.0000033378601074)
})
toggleButton13.addComponentOrReplace(transform372)

const toggleButton14 = new Entity('toggleButton14')
engine.addEntity(toggleButton14)
toggleButton14.setParent(_scene)
const transform373 = new Transform({
  position: new Vector3(43.2012939453125, 2.6991970539093018, 2.3045787811279297),
  rotation: new Quaternion(0.653836190700531, -0.6538361310958862, -0.2692550718784332, 0.26925504207611084),
  scale: new Vector3(1.0000017881393433, 1.0000033378601074, 1.0000033378601074)
})
toggleButton14.addComponentOrReplace(transform373)

const clickArea7 = new Entity('clickArea7')
engine.addEntity(clickArea7)
clickArea7.setParent(_scene)
const transform374 = new Transform({
  position: new Vector3(54, 1.5, 47),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
clickArea7.addComponentOrReplace(transform374)

const invisibleWall11 = new Entity('invisibleWall11')
engine.addEntity(invisibleWall11)
invisibleWall11.setParent(_scene)
const transform375 = new Transform({
  position: new Vector3(54.14049530029297, 1.3607501983642578, 46.90775680541992),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 0.3392206132411957)
})
invisibleWall11.addComponentOrReplace(transform375)

const toggleButton15 = new Entity('toggleButton15')
engine.addEntity(toggleButton15)
toggleButton15.setParent(_scene)
const transform376 = new Transform({
  position: new Vector3(42.974857330322266, 3.1991970539093018, 1.903482437133789),
  rotation: new Quaternion(0.653836190700531, -0.6538361310958862, -0.2692550718784332, 0.26925504207611084),
  scale: new Vector3(1.0000017881393433, 1.0000033378601074, 1.0000033378601074)
})
toggleButton15.addComponentOrReplace(transform376)

const clickArea8 = new Entity('clickArea8')
engine.addEntity(clickArea8)
clickArea8.setParent(_scene)
const transform377 = new Transform({
  position: new Vector3(58.75563430786133, 13.614941596984863, 30.46409797668457),
  rotation: new Quaternion(4.3553687700031356e-16, -0.70710688829422, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.0000014305114746, 1, 0.32642093300819397)
})
clickArea8.addComponentOrReplace(transform377)

const invisibleWall12 = new Entity('invisibleWall12')
engine.addEntity(invisibleWall12)
invisibleWall12.setParent(_scene)
const transform378 = new Transform({
  position: new Vector3(58.78439712524414, 13.645434379577637, 30.47684669494629),
  rotation: new Quaternion(4.3553687700031356e-16, -0.70710688829422, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.0000014305114746, 1, 0.29064422845840454)
})
invisibleWall12.addComponentOrReplace(transform378)

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform379 = new Transform({
  position: new Vector3(32.5, 0.1399998664855957, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(52.19322204589844, 1, 4.909814834594727)
})
triggerArea.addComponentOrReplace(transform379)

const triggerArea2 = new Entity('triggerArea2')
engine.addEntity(triggerArea2)
triggerArea2.setParent(_scene)
const transform380 = new Transform({
  position: new Vector3(31.234451293945312, 0.1399998664855957, 54.55104064941406),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(61.89799118041992, 3.5, 2.2509145736694336)
})
triggerArea2.addComponentOrReplace(transform380)

const triggerArea3 = new Entity('triggerArea3')
engine.addEntity(triggerArea3)
triggerArea3.setParent(_scene)
const transform381 = new Transform({
  position: new Vector3(8.164678573608398, 0.1399998664855957, 36.882591247558594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.361871719360352, 1, 52.39470291137695)
})
triggerArea3.addComponentOrReplace(transform381)

const triggerArea4 = new Entity('triggerArea4')
engine.addEntity(triggerArea4)
triggerArea4.setParent(_scene)
const transform382 = new Transform({
  position: new Vector3(55.115291595458984, 0.1399998664855957, 29.533674240112305),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.350008964538574, 1, 53.19367218017578)
})
triggerArea4.addComponentOrReplace(transform382)

const tablet2 = new Entity('tablet2')
engine.addEntity(tablet2)
tablet2.setParent(_scene)
const transform383 = new Transform({
  position: new Vector3(5.842738151550293, 12.520458221435547, 57.87889099121094),
  rotation: new Quaternion(0, 0.0980171412229538, -1.1684551992630077e-8, 0.9951847195625305),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
tablet2.addComponentOrReplace(transform383)

const plainText4 = new Entity('plainText4')
engine.addEntity(plainText4)
plainText4.setParent(_scene)
const transform384 = new Transform({
  position: new Vector3(31.834028244018555, 3.588047742843628, 8.051135063171387),
  rotation: new Quaternion(-5.789460135966894e-16, 0.9978066682815552, -1.1894780271859418e-7, 0.06619609892368317),
  scale: new Vector3(0.9411981701850891, 1.8758161067962646, 0.983251690864563)
})
plainText4.addComponentOrReplace(transform384)

const graffiti7 = new Entity('graffiti7')
engine.addEntity(graffiti7)
graffiti7.setParent(_scene)
graffiti7.addComponentOrReplace(gltfShape48)
const transform385 = new Transform({
  position: new Vector3(31.868318557739258, 3.4103715419769287, 8.104284286499023),
  rotation: new Quaternion(-2.2508547438149793e-15, -0.997356116771698, 1.1889409279319807e-7, -0.07266885787248611),
  scale: new Vector3(0.3438390791416168, 0.3764045834541321, 1.0000042915344238)
})
graffiti7.addComponentOrReplace(transform385)

const plainText5 = new Entity('plainText5')
engine.addEntity(plainText5)
plainText5.setParent(_scene)
const transform386 = new Transform({
  position: new Vector3(32.912452697753906, 3.588047742843628, 8.270119667053223),
  rotation: new Quaternion(-4.679431928919606e-16, 0.998369574546814, -1.1901490637455936e-7, 0.05708107724785805),
  scale: new Vector3(0.9411981701850891, 1.8758161067962646, 0.9832513332366943)
})
plainText5.addComponentOrReplace(transform386)

const redAccessCard2 = new Entity('redAccessCard2')
engine.addEntity(redAccessCard2)
redAccessCard2.setParent(_scene)
const transform387 = new Transform({
  position: new Vector3(55.366302490234375, 13.430583000183105, 14.984847068786621),
  rotation: new Quaternion(0.2814331650733948, 0.35844770073890686, 0.5496875047683716, 0.7001103162765503),
  scale: new Vector3(1.0000041723251343, 1.0000042915344238, 1)
})
redAccessCard2.addComponentOrReplace(transform387)

const plainText6 = new Entity('plainText6')
engine.addEntity(plainText6)
plainText6.setParent(_scene)
const transform388 = new Transform({
  position: new Vector3(43.338680267333984, 4.83805513381958, 3.3398947715759277),
  rotation: new Quaternion(-7.328294008001343e-16, -0.430853009223938, 5.136167402497449e-8, 0.9024221301078796),
  scale: new Vector3(1, 1, 1)
})
plainText6.addComponentOrReplace(transform388)

const plainText7 = new Entity('plainText7')
engine.addEntity(plainText7)
plainText7.setParent(_scene)
const transform389 = new Transform({
  position: new Vector3(44.24924850463867, 1.392811894416809, 3.8315446376800537),
  rotation: new Quaternion(-7.328294008001343e-16, -0.430853009223938, 5.136167402497449e-8, 0.9024221301078796),
  scale: new Vector3(1, 1, 1)
})
plainText7.addComponentOrReplace(transform389)

const plainText9 = new Entity('plainText9')
engine.addEntity(plainText9)
plainText9.setParent(_scene)
const transform390 = new Transform({
  position: new Vector3(43.389713287353516, 4.815603256225586, 6.20008659362793),
  rotation: new Quaternion(-2.22806680467676e-15, -0.8670623302459717, 1.0336187017401244e-7, 0.4981997609138489),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
plainText9.addComponentOrReplace(transform390)

const wallPlainBlack15 = new Entity('wallPlainBlack15')
engine.addEntity(wallPlainBlack15)
wallPlainBlack15.setParent(_scene)
wallPlainBlack15.addComponentOrReplace(gltfShape49)
const transform391 = new Transform({
  position: new Vector3(42.16401290893555, 0.0045299530029296875, 1.6178617477416992),
  rotation: new Quaternion(8.434581294037083e-15, 0.7087720036506653, -8.449222121953426e-8, 0.7054376602172852),
  scale: new Vector3(2.8933534622192383, 1.6776355504989624, 0.9997727274894714)
})
wallPlainBlack15.addComponentOrReplace(transform391)

const indicatorArrow3 = new Entity('indicatorArrow3')
engine.addEntity(indicatorArrow3)
indicatorArrow3.setParent(_scene)
const transform392 = new Transform({
  position: new Vector3(52.048439025878906, 2.3725221157073975, 13.04139232635498),
  rotation: new Quaternion(2.7454588810569202e-15, -0.6481156349182129, 7.726139017449896e-8, 0.761542022228241),
  scale: new Vector3(2.9690847396850586, 4.187067985534668, 1.000000238418579)
})
indicatorArrow3.addComponentOrReplace(transform392)

const invisibleWall13 = new Entity('invisibleWall13')
engine.addEntity(invisibleWall13)
invisibleWall13.setParent(_scene)
const transform393 = new Transform({
  position: new Vector3(31.296287536621094, 0, 8.981825828552246),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6826362609863281, 7.562598705291748, 1.4375501871109009)
})
invisibleWall13.addComponentOrReplace(transform393)

const invisibleWall14 = new Entity('invisibleWall14')
engine.addEntity(invisibleWall14)
invisibleWall14.setParent(_scene)
const transform394 = new Transform({
  position: new Vector3(33.44850158691406, 0, 9.017352104187012),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6826362609863281, 7.562598705291748, 1.2656569480895996)
})
invisibleWall14.addComponentOrReplace(transform394)

const invisibleWall15 = new Entity('invisibleWall15')
engine.addEntity(invisibleWall15)
invisibleWall15.setParent(_scene)
const transform395 = new Transform({
  position: new Vector3(16.034074783325195, 7.352230072021484, 59.876708984375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7778518199920654, 4.606901168823242, -0.7847601771354675)
})
invisibleWall15.addComponentOrReplace(transform395)

const invisibleWall16 = new Entity('invisibleWall16')
engine.addEntity(invisibleWall16)
invisibleWall16.setParent(_scene)
const transform396 = new Transform({
  position: new Vector3(15.997055053710938, 7.352230072021484, 62.411808013916016),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7778518199920654, 4.606901168823242, 0.6603867411613464)
})
invisibleWall16.addComponentOrReplace(transform396)

const invisibleWall17 = new Entity('invisibleWall17')
engine.addEntity(invisibleWall17)
invisibleWall17.setParent(_scene)
const transform397 = new Transform({
  position: new Vector3(20.31203842163086, 15.056999206542969, 58.755027770996094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7778518199920654, 8.95975399017334, 0.6603867411613464)
})
invisibleWall17.addComponentOrReplace(transform397)

const invisibleWall18 = new Entity('invisibleWall18')
engine.addEntity(invisibleWall18)
invisibleWall18.setParent(_scene)
const transform398 = new Transform({
  position: new Vector3(20.2843074798584, 15.056999206542969, 56.68785858154297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.7778518199920654, 8.95975399017334, 0.6603867411613464)
})
invisibleWall18.addComponentOrReplace(transform398)

const clickArea9 = new Entity('clickArea9')
engine.addEntity(clickArea9)
clickArea9.setParent(_scene)
const transform399 = new Transform({
  position: new Vector3(52.49372863769531, 0, 11.971504211425781),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.8921432495117188, 3, 8.25)
})
clickArea9.addComponentOrReplace(transform399)

const clickArea10 = new Entity('clickArea10')
engine.addEntity(clickArea10)
clickArea10.setParent(_scene)
const transform400 = new Transform({
  position: new Vector3(43.95325469970703, 1.0330127477645874, 2.8247835636138916),
  rotation: new Quaternion(-2.81172983887759e-17, -0.44287073612213135, 5.279430581595079e-8, 0.8965854644775391),
  scale: new Vector3(2.5000007152557373, 3, 0.2729393541812897)
})
clickArea10.addComponentOrReplace(transform400)

const graffiti8 = new Entity('graffiti8')
engine.addEntity(graffiti8)
graffiti8.setParent(_scene)
const transform401 = new Transform({
  position: new Vector3(43.9212760925293, 2.399022102355957, 2.976430654525757),
  rotation: new Quaternion(-5.801591765353944e-16, -0.4251701235771179, 5.068422126441874e-8, 0.9051135182380676),
  scale: new Vector3(-0.020726677030324936, 0.0021150109823793173, 1.000000238418579)
})
graffiti8.addComponentOrReplace(transform401)
graffiti8.addComponentOrReplace(gltfShape48)

const trashGroup6 = new Entity('trashGroup6')
engine.addEntity(trashGroup6)
trashGroup6.setParent(_scene)
const transform402 = new Transform({
  position: new Vector3(44.3411979675293, 0, 2.5872926712036133),
  rotation: new Quaternion(-9.708735316565133e-17, -0.19822286069393158, 2.3630002843333386e-8, 0.9801570177078247),
  scale: new Vector3(1, 1, 1)
})
trashGroup6.addComponentOrReplace(transform402)
trashGroup6.addComponentOrReplace(gltfShape20)

const trashGroup7 = new Entity('trashGroup7')
engine.addEntity(trashGroup7)
trashGroup7.setParent(_scene)
const transform403 = new Transform({
  position: new Vector3(58.61885452270508, 0, 51.051151275634766),
  rotation: new Quaternion(-2.1244931312813864e-17, 0.13864575326442719, -1.6527859969528436e-8, 0.9903420805931091),
  scale: new Vector3(1, 1, 1)
})
trashGroup7.addComponentOrReplace(transform403)
trashGroup7.addComponentOrReplace(gltfShape20)

const graffiti9 = new Entity('graffiti9')
engine.addEntity(graffiti9)
graffiti9.setParent(_scene)
const transform404 = new Transform({
  position: new Vector3(60.61024475097656, 12.81395149230957, 5.124502658843994),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.01931851916015148, 0.009869311936199665, 1.0000033378601074)
})
graffiti9.addComponentOrReplace(transform404)
graffiti9.addComponentOrReplace(gltfShape48)

const clickArea11 = new Entity('clickArea11')
engine.addEntity(clickArea11)
clickArea11.setParent(_scene)
const transform405 = new Transform({
  position: new Vector3(60.55436325073242, 12.927135467529297, 5.07355260848999),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.1364891529083252, 2.954333782196045, 2.4586379528045654)
})
clickArea11.addComponentOrReplace(transform405)

const graffiti10 = new Entity('graffiti10')
engine.addEntity(graffiti10)
graffiti10.setParent(_scene)
graffiti10.addComponentOrReplace(gltfShape48)
const transform406 = new Transform({
  position: new Vector3(1.7675899267196655, 13.31395149230957, 24.222463607788086),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.019318530336022377, 0.009869311936199665, 1.0000040531158447)
})
graffiti10.addComponentOrReplace(transform406)

const clickArea12 = new Entity('clickArea12')
engine.addEntity(clickArea12)
clickArea12.setParent(_scene)
const transform407 = new Transform({
  position: new Vector3(1.6922980546951294, 13.427135467529297, 24.178651809692383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.1364891529083252, 2.954333782196045, 2.4586379528045654)
})
clickArea12.addComponentOrReplace(transform407)

const graffiti11 = new Entity('graffiti11')
engine.addEntity(graffiti11)
graffiti11.setParent(_scene)
graffiti11.addComponentOrReplace(gltfShape48)
const transform408 = new Transform({
  position: new Vector3(20.351116180419922, 1.1058554649353027, 10.15759563446045),
  rotation: new Quaternion(-5.801111603551969e-16, -0.43678179383277893, 5.2068440226094026e-8, 0.8995675444602966),
  scale: new Vector3(-0.02072669379413128, 0.0021150109823793173, 1.000001072883606)
})
graffiti11.addComponentOrReplace(transform408)

const clickArea13 = new Entity('clickArea13')
engine.addEntity(clickArea13)
clickArea13.setParent(_scene)
const transform409 = new Transform({
  position: new Vector3(20.45415687561035, 0.8710565567016602, 10.085807800292969),
  rotation: new Quaternion(8.292220943048085e-17, -0.4245149791240692, 5.0606129065045025e-8, 0.9054208993911743),
  scale: new Vector3(1.598920226097107, 1.6311911344528198, 0.18371278047561646)
})
clickArea13.addComponentOrReplace(transform409)

const clickArea14 = new Entity('clickArea14')
engine.addEntity(clickArea14)
clickArea14.setParent(_scene)
const transform410 = new Transform({
  position: new Vector3(58.96412658691406, 0, 51.66999435424805),
  rotation: new Quaternion(3.4749314902870858e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.0478958822786808, 2.954333782196045, 2.4586403369903564)
})
clickArea14.addComponentOrReplace(transform410)

const graffiti12 = new Entity('graffiti12')
engine.addEntity(graffiti12)
graffiti12.setParent(_scene)
const transform411 = new Transform({
  position: new Vector3(59.70646286010742, 1.0477941036224365, 51.66128158569336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.012344698421657085, 0.0015126236248761415, 1)
})
graffiti12.addComponentOrReplace(transform411)
graffiti12.addComponentOrReplace(gltfShape48)

const clickArea15 = new Entity('clickArea15')
engine.addEntity(clickArea15)
clickArea15.setParent(_scene)
const transform412 = new Transform({
  position: new Vector3(56.097537994384766, 32.50558090209961, 41.89167404174805),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.811423301696777, 3.0568158626556396, 4.19502067565918)
})
clickArea15.addComponentOrReplace(transform412)

const clickArea16 = new Entity('clickArea16')
engine.addEntity(clickArea16)
clickArea16.setParent(_scene)
const transform413 = new Transform({
  position: new Vector3(3.5367159843444824, 0, 32.77095031738281),
  rotation: new Quaternion(3.4749314902870858e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.13648948073387146, 2.954333782196045, 2.4586431980133057)
})
clickArea16.addComponentOrReplace(transform413)

const graffiti13 = new Entity('graffiti13')
engine.addEntity(graffiti13)
graffiti13.setParent(_scene)
const transform414 = new Transform({
  position: new Vector3(3.5172884464263916, 0.7972021102905273, 32.74016189575195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-0.001538015785627067, 0.003580475924536586, 0.9999999403953552)
})
graffiti13.addComponentOrReplace(transform414)
graffiti13.addComponentOrReplace(gltfShape48)

const clickArea17 = new Entity('clickArea17')
engine.addEntity(clickArea17)
clickArea17.setParent(_scene)
const transform415 = new Transform({
  position: new Vector3(59.00263977050781, 30.691370010375977, 37.104244232177734),
  rotation: new Quaternion(-5.201876821527934e-17, -0.1986827850341797, 2.3684831873538315e-8, 0.9800638556480408),
  scale: new Vector3(1.7440226078033447, 1, 0.5175230503082275)
})
clickArea17.addComponentOrReplace(transform415)

const openAndClosedSign4 = new Entity('openAndClosedSign4')
engine.addEntity(openAndClosedSign4)
openAndClosedSign4.setParent(_scene)
const transform416 = new Transform({
  position: new Vector3(55.706336975097656, 2.4394164085388184, 30.539249420166016),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
openAndClosedSign4.addComponentOrReplace(transform416)

const plainText10 = new Entity('plainText10')
engine.addEntity(plainText10)
plainText10.setParent(_scene)
const transform417 = new Transform({
  position: new Vector3(58.240516662597656, 32.62886047363281, 39.77938461303711),
  rotation: new Quaternion(5.810385979049693e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
plainText10.addComponentOrReplace(transform417)

const plainText11 = new Entity('plainText11')
engine.addEntity(plainText11)
plainText11.setParent(_scene)
const transform418 = new Transform({
  position: new Vector3(54.067970275878906, 32.62886047363281, 39.53078842163086),
  rotation: new Quaternion(5.810385979049693e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
plainText11.addComponentOrReplace(transform418)

const clickArea18 = new Entity('clickArea18')
engine.addEntity(clickArea18)
clickArea18.setParent(_scene)
const transform419 = new Transform({
  position: new Vector3(54.10366439819336, 32.4420166015625, 39.583553314208984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.042781114578247, 0.7082704305648804, 0.3378012478351593)
})
clickArea18.addComponentOrReplace(transform419)

const clickArea19 = new Entity('clickArea19')
engine.addEntity(clickArea19)
clickArea19.setParent(_scene)
const transform420 = new Transform({
  position: new Vector3(58.32218933105469, 32.4420166015625, 39.70045852661133),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.042781114578247, 0.7082704305648804, 0.3378012478351593)
})
clickArea19.addComponentOrReplace(transform420)

const invisibleWall19 = new Entity('invisibleWall19')
engine.addEntity(invisibleWall19)
invisibleWall19.setParent(_scene)
const transform421 = new Transform({
  position: new Vector3(43.959922790527344, 0.5261964797973633, 2.6937007904052734),
  rotation: new Quaternion(5.47089845604284e-16, -0.46230369806289673, 5.511088474463577e-8, 0.886721670627594),
  scale: new Vector3(3.665907859802246, 3.924175262451172, 0.5075947046279907)
})
invisibleWall19.addComponentOrReplace(transform421)

const invisibleWall20 = new Entity('invisibleWall20')
engine.addEntity(invisibleWall20)
invisibleWall20.setParent(_scene)
const transform422 = new Transform({
  position: new Vector3(20.446414947509766, 0.5261964797973633, 9.80613899230957),
  rotation: new Quaternion(5.47089845604284e-16, -0.46230369806289673, 5.511088474463577e-8, 0.886721670627594),
  scale: new Vector3(3.2903432846069336, 2.425673246383667, 0.421125590801239)
})
invisibleWall20.addComponentOrReplace(transform422)

const invisibleWall21 = new Entity('invisibleWall21')
engine.addEntity(invisibleWall21)
invisibleWall21.setParent(_scene)
const transform423 = new Transform({
  position: new Vector3(60.533775329589844, 11.91145133972168, 5.266146659851074),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.3566042184829712, 4.187448024749756, 3.131399154663086)
})
invisibleWall21.addComponentOrReplace(transform423)

const invisibleWall22 = new Entity('invisibleWall22')
engine.addEntity(invisibleWall22)
invisibleWall22.setParent(_scene)
const transform424 = new Transform({
  position: new Vector3(1.7361506223678589, 12.597700119018555, 24.261749267578125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.3566042184829712, 4.187448024749756, 3.131399154663086)
})
invisibleWall22.addComponentOrReplace(transform424)

const invisibleWall23 = new Entity('invisibleWall23')
engine.addEntity(invisibleWall23)
invisibleWall23.setParent(_scene)
const transform425 = new Transform({
  position: new Vector3(3.514512062072754, 0.035971641540527344, 32.707862854003906),
  rotation: new Quaternion(1.1038385137852273e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.3566042184829712, 4.187448024749756, 3.131399154663086)
})
invisibleWall23.addComponentOrReplace(transform425)

const invisibleWall24 = new Entity('invisibleWall24')
engine.addEntity(invisibleWall24)
invisibleWall24.setParent(_scene)
const transform426 = new Transform({
  position: new Vector3(59.19070816040039, 0.035971641540527344, 51.67091369628906),
  rotation: new Quaternion(1.1038385137852273e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.1701398342847824, 4.187448024749756, 3.131399154663086)
})
invisibleWall24.addComponentOrReplace(transform426)

const toggleButton17 = new Entity('toggleButton17')
engine.addEntity(toggleButton17)
toggleButton17.setParent(_scene)
const transform427 = new Transform({
  position: new Vector3(60.90480422973633, 31.10789680480957, 44.48794937133789),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton17.addComponentOrReplace(transform427)

const telephoneBooth = new Entity('telephoneBooth')
engine.addEntity(telephoneBooth)
telephoneBooth.setParent(_scene)
const transform428 = new Transform({
  position: new Vector3(51, 0, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
telephoneBooth.addComponentOrReplace(transform428)

const railingStraight = new Entity('railingStraight')
engine.addEntity(railingStraight)
railingStraight.setParent(_scene)
railingStraight.addComponentOrReplace(gltfShape43)
const transform429 = new Transform({
  position: new Vector3(43.5, 6, 46),
  rotation: new Quaternion(-2.177062080483132e-15, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(1.0566587448120117, 1, 1.0000039339065552)
})
railingStraight.addComponentOrReplace(transform429)

const telephoneBooth2 = new Entity('telephoneBooth2')
engine.addEntity(telephoneBooth2)
telephoneBooth2.setParent(_scene)
const transform430 = new Transform({
  position: new Vector3(1, 0, 54),
  rotation: new Quaternion(4.46176246092538e-16, 0.7730104923248291, -9.21500173944878e-8, 0.6343932747840881),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
telephoneBooth2.addComponentOrReplace(transform430)

const umbrellaTable = new Entity('umbrellaTable')
engine.addEntity(umbrellaTable)
umbrellaTable.setParent(_scene)
umbrellaTable.addComponentOrReplace(gltfShape30)
const transform431 = new Transform({
  position: new Vector3(19.5, 0, 29.152233123779297),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
umbrellaTable.addComponentOrReplace(transform431)

const largeStoneFloor = new Entity('largeStoneFloor')
engine.addEntity(largeStoneFloor)
largeStoneFloor.setParent(_scene)
largeStoneFloor.addComponentOrReplace(gltfShape9)
const transform432 = new Transform({
  position: new Vector3(14.5, 0, 20),
  rotation: new Quaternion(-1.5394204423504229e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000114440917969, 1, 12.346048355102539)
})
largeStoneFloor.addComponentOrReplace(transform432)

const grafittiWallI20 = new Entity('grafittiWallI20')
engine.addEntity(grafittiWallI20)
grafittiWallI20.setParent(_scene)
grafittiWallI20.addComponentOrReplace(gltfShape8)
const transform433 = new Transform({
  position: new Vector3(49.25492858886719, 12.5, 33.5),
  rotation: new Quaternion(0.5000000596046448, 0.5, 0.4999999403953552, -0.5000001192092896),
  scale: new Vector3(5.646731853485107, 3.557950973510742, 1.0000113248825073)
})
grafittiWallI20.addComponentOrReplace(transform433)

const grafittiWallShortE2 = new Entity('grafittiWallShortE2')
engine.addEntity(grafittiWallShortE2)
grafittiWallShortE2.setParent(_scene)
grafittiWallShortE2.addComponentOrReplace(gltfShape14)
const transform434 = new Transform({
  position: new Vector3(64, 12.5, 1.5),
  rotation: new Quaternion(-0.4999999403953552, 0.5000000596046448, 0.5, 0.5),
  scale: new Vector3(11.750614166259766, 1.928726077079773, 0.48860177397727966)
})
grafittiWallShortE2.addComponentOrReplace(transform434)

const smallStoneSlabTile = new Entity('smallStoneSlabTile')
engine.addEntity(smallStoneSlabTile)
smallStoneSlabTile.setParent(_scene)
const transform435 = new Transform({
  position: new Vector3(39, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000011682510376, 1.4905658960342407, 4.50002384185791)
})
smallStoneSlabTile.addComponentOrReplace(transform435)
const gltfShape50 = new GLTFShape("models/StoneSlabSmall_01/StoneSlabSmall_01-no-bottom.glb")
gltfShape50.withCollisions = true
gltfShape50.isPointerBlocker = true
gltfShape50.visible = true
smallStoneSlabTile.addComponentOrReplace(gltfShape50)

const smallStoneSlabTile4 = new Entity('smallStoneSlabTile4')
engine.addEntity(smallStoneSlabTile4)
smallStoneSlabTile4.setParent(_scene)
smallStoneSlabTile4.addComponentOrReplace(gltfShape50)
const transform436 = new Transform({
  position: new Vector3(34.5, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000011682510376, 1.4905658960342407, 4.50002384185791)
})
smallStoneSlabTile4.addComponentOrReplace(transform436)

const smallStoneSlabTile7 = new Entity('smallStoneSlabTile7')
engine.addEntity(smallStoneSlabTile7)
smallStoneSlabTile7.setParent(_scene)
smallStoneSlabTile7.addComponentOrReplace(gltfShape50)
const transform437 = new Transform({
  position: new Vector3(12.5, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000112056732178, 1.4905658960342407, 4.500022888183594)
})
smallStoneSlabTile7.addComponentOrReplace(transform437)

const smallStoneSlabTile10 = new Entity('smallStoneSlabTile10')
engine.addEntity(smallStoneSlabTile10)
smallStoneSlabTile10.setParent(_scene)
smallStoneSlabTile10.addComponentOrReplace(gltfShape50)
const transform438 = new Transform({
  position: new Vector3(16.919960021972656, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000014066696167, 1.4905658960342407, 4.500028610229492)
})
smallStoneSlabTile10.addComponentOrReplace(transform438)

const smallStoneSlabTile15 = new Entity('smallStoneSlabTile15')
engine.addEntity(smallStoneSlabTile15)
smallStoneSlabTile15.setParent(_scene)
smallStoneSlabTile15.addComponentOrReplace(gltfShape50)
const transform439 = new Transform({
  position: new Vector3(25.784523010253906, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000013589859009, 1.4905658960342407, 4.500027656555176)
})
smallStoneSlabTile15.addComponentOrReplace(transform439)

const smallStoneSlabTile17 = new Entity('smallStoneSlabTile17')
engine.addEntity(smallStoneSlabTile17)
smallStoneSlabTile17.setParent(_scene)
smallStoneSlabTile17.addComponentOrReplace(gltfShape50)
const transform440 = new Transform({
  position: new Vector3(30.155860900878906, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000012159347534, 1.4905658960342407, 4.500024795532227)
})
smallStoneSlabTile17.addComponentOrReplace(transform440)

const smallStoneSlabTile23 = new Entity('smallStoneSlabTile23')
engine.addEntity(smallStoneSlabTile23)
smallStoneSlabTile23.setParent(_scene)
smallStoneSlabTile23.addComponentOrReplace(gltfShape50)
const transform441 = new Transform({
  position: new Vector3(21.381458282470703, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000014066696167, 1.4905658960342407, 4.500028610229492)
})
smallStoneSlabTile23.addComponentOrReplace(transform441)

const smallStoneSlabTile2 = new Entity('smallStoneSlabTile2')
engine.addEntity(smallStoneSlabTile2)
smallStoneSlabTile2.setParent(_scene)
smallStoneSlabTile2.addComponentOrReplace(gltfShape50)
const transform442 = new Transform({
  position: new Vector3(20.507083892822266, 6.910034500151596e-8, 12),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000131130218506, 1.4905658960342407, 4.500026702880859)
})
smallStoneSlabTile2.addComponentOrReplace(transform442)

const smallStoneSlabTile8 = new Entity('smallStoneSlabTile8')
engine.addEntity(smallStoneSlabTile8)
smallStoneSlabTile8.setParent(_scene)
smallStoneSlabTile8.addComponentOrReplace(gltfShape50)
const transform443 = new Transform({
  position: new Vector3(25.007083892822266, 6.910034500151596e-8, 12),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000014066696167, 1.4905658960342407, 4.500028610229492)
})
smallStoneSlabTile8.addComponentOrReplace(transform443)

const smallStoneSlabTile9 = new Entity('smallStoneSlabTile9')
engine.addEntity(smallStoneSlabTile9)
smallStoneSlabTile9.setParent(_scene)
smallStoneSlabTile9.addComponentOrReplace(gltfShape50)
const transform444 = new Transform({
  position: new Vector3(29.507083892822266, 6.910034500151596e-8, 12),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000013589859009, 1.4905658960342407, 4.500027656555176)
})
smallStoneSlabTile9.addComponentOrReplace(transform444)

const smallStoneSlabTile13 = new Entity('smallStoneSlabTile13')
engine.addEntity(smallStoneSlabTile13)
smallStoneSlabTile13.setParent(_scene)
smallStoneSlabTile13.addComponentOrReplace(gltfShape50)
const transform445 = new Transform({
  position: new Vector3(34.007083892822266, 6.910034500151596e-8, 12),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000012159347534, 1.4905658960342407, 4.500024795532227)
})
smallStoneSlabTile13.addComponentOrReplace(transform445)

const smallStoneSlabTile14 = new Entity('smallStoneSlabTile14')
engine.addEntity(smallStoneSlabTile14)
smallStoneSlabTile14.setParent(_scene)
smallStoneSlabTile14.addComponentOrReplace(gltfShape50)
const transform446 = new Transform({
  position: new Vector3(38.507083892822266, 6.910034500151596e-8, 12),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000012159347534, 1.4905658960342407, 4.500024795532227)
})
smallStoneSlabTile14.addComponentOrReplace(transform446)

const smallStoneSlabTile19 = new Entity('smallStoneSlabTile19')
engine.addEntity(smallStoneSlabTile19)
smallStoneSlabTile19.setParent(_scene)
smallStoneSlabTile19.addComponentOrReplace(gltfShape50)
const transform447 = new Transform({
  position: new Vector3(43.007083892822266, 6.910034500151596e-8, 12),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000011682510376, 1.4905658960342407, 4.50002384185791)
})
smallStoneSlabTile19.addComponentOrReplace(transform447)

const smallStoneSlabTile30 = new Entity('smallStoneSlabTile30')
engine.addEntity(smallStoneSlabTile30)
smallStoneSlabTile30.setParent(_scene)
smallStoneSlabTile30.addComponentOrReplace(gltfShape50)
const transform448 = new Transform({
  position: new Vector3(47.446372985839844, 6.910034500151596e-8, 12),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000154972076416, 1.4905658960342407, 4.500031471252441)
})
smallStoneSlabTile30.addComponentOrReplace(transform448)

const smallStoneSlabTile31 = new Entity('smallStoneSlabTile31')
engine.addEntity(smallStoneSlabTile31)
smallStoneSlabTile31.setParent(_scene)
smallStoneSlabTile31.addComponentOrReplace(gltfShape50)
const transform449 = new Transform({
  position: new Vector3(51.938899993896484, 6.910034500151596e-8, 12),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000154972076416, 1.4905658960342407, 4.500031471252441)
})
smallStoneSlabTile31.addComponentOrReplace(transform449)

const smallStoneSlabTile32 = new Entity('smallStoneSlabTile32')
engine.addEntity(smallStoneSlabTile32)
smallStoneSlabTile32.setParent(_scene)
smallStoneSlabTile32.addComponentOrReplace(gltfShape50)
const transform450 = new Transform({
  position: new Vector3(56.315948486328125, 6.910034500151596e-8, 12),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000150203704834, 1.4905658960342407, 4.500030517578125)
})
smallStoneSlabTile32.addComponentOrReplace(transform450)

const smallStoneSlabTile33 = new Entity('smallStoneSlabTile33')
engine.addEntity(smallStoneSlabTile33)
smallStoneSlabTile33.setParent(_scene)
smallStoneSlabTile33.addComponentOrReplace(gltfShape50)
const transform451 = new Transform({
  position: new Vector3(60.517147064208984, 6.910034500151596e-8, 12),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000174045562744, 1.4905658960342407, 4.158209800720215)
})
smallStoneSlabTile33.addComponentOrReplace(transform451)

const smallStoneSlabTile36 = new Entity('smallStoneSlabTile36')
engine.addEntity(smallStoneSlabTile36)
smallStoneSlabTile36.setParent(_scene)
smallStoneSlabTile36.addComponentOrReplace(gltfShape50)
const transform452 = new Transform({
  position: new Vector3(53.06147766113281, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000016450881958, 1.4905658960342407, 4.500033378601074)
})
smallStoneSlabTile36.addComponentOrReplace(transform452)

const smallStoneSlabTile39 = new Entity('smallStoneSlabTile39')
engine.addEntity(smallStoneSlabTile39)
smallStoneSlabTile39.setParent(_scene)
smallStoneSlabTile39.addComponentOrReplace(gltfShape50)
const transform453 = new Transform({
  position: new Vector3(57.43852615356445, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000159740448, 1.4905658960342407, 4.500032424926758)
})
smallStoneSlabTile39.addComponentOrReplace(transform453)

const smallStoneSlabTile41 = new Entity('smallStoneSlabTile41')
engine.addEntity(smallStoneSlabTile41)
smallStoneSlabTile41.setParent(_scene)
smallStoneSlabTile41.addComponentOrReplace(gltfShape50)
const transform454 = new Transform({
  position: new Vector3(48.5, 6.910034500151596e-8, 24.5),
  rotation: new Quaternion(3.750039744742284e-15, 5.960464477539063e-8, -6.044775242148009e-15, 1),
  scale: new Vector3(2.000014305114746, 1.4905658960342407, 4.50002908706665)
})
smallStoneSlabTile41.addComponentOrReplace(transform454)

const smallStoneSlabTile42 = new Entity('smallStoneSlabTile42')
engine.addEntity(smallStoneSlabTile42)
smallStoneSlabTile42.setParent(_scene)
smallStoneSlabTile42.addComponentOrReplace(gltfShape50)
const transform455 = new Transform({
  position: new Vector3(48.5, 2.7336244556863676e-7, 29),
  rotation: new Quaternion(3.750039744742284e-15, 5.960464477539063e-8, -6.044775242148009e-15, 1),
  scale: new Vector3(2.000013828277588, 1.4905658960342407, 4.500028133392334)
})
smallStoneSlabTile42.addComponentOrReplace(transform455)

const smallStoneSlabTile43 = new Entity('smallStoneSlabTile43')
engine.addEntity(smallStoneSlabTile43)
smallStoneSlabTile43.setParent(_scene)
smallStoneSlabTile43.addComponentOrReplace(gltfShape50)
const transform456 = new Transform({
  position: new Vector3(48.5, 2.7336244556863676e-7, 32.82405090332031),
  rotation: new Quaternion(3.750039744742284e-15, 5.960464477539063e-8, -6.044775242148009e-15, 1),
  scale: new Vector3(2.000013828277588, 1.4905658960342407, 4.500028133392334)
})
smallStoneSlabTile43.addComponentOrReplace(transform456)

const smallStoneSlabTile48 = new Entity('smallStoneSlabTile48')
engine.addEntity(smallStoneSlabTile48)
smallStoneSlabTile48.setParent(_scene)
smallStoneSlabTile48.addComponentOrReplace(gltfShape50)
const transform457 = new Transform({
  position: new Vector3(38.59774398803711, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-4.15760828203853e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.0000100135803223, 1.4905658960342407, 4.500020503997803)
})
smallStoneSlabTile48.addComponentOrReplace(transform457)

const smallStoneSlabTile51 = new Entity('smallStoneSlabTile51')
engine.addEntity(smallStoneSlabTile51)
smallStoneSlabTile51.setParent(_scene)
smallStoneSlabTile51.addComponentOrReplace(gltfShape50)
const transform458 = new Transform({
  position: new Vector3(8, 6.910034500151596e-8, 5.0807342529296875),
  rotation: new Quaternion(-1.6199320886572466e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.0000088214874268, 1.4905658960342407, 5.112188816070557)
})
smallStoneSlabTile51.addComponentOrReplace(transform458)

const smallStoneSlabTile35 = new Entity('smallStoneSlabTile35')
engine.addEntity(smallStoneSlabTile35)
smallStoneSlabTile35.setParent(_scene)
smallStoneSlabTile35.addComponentOrReplace(gltfShape50)
const transform459 = new Transform({
  position: new Vector3(8, 6.910034500151596e-8, 15.335897445678711),
  rotation: new Quaternion(-1.6199320886572466e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.0000088214874268, 1.4905658960342407, 4.69429874420166)
})
smallStoneSlabTile35.addComponentOrReplace(transform459)

const smallStoneSlabTile49 = new Entity('smallStoneSlabTile49')
engine.addEntity(smallStoneSlabTile49)
smallStoneSlabTile49.setParent(_scene)
smallStoneSlabTile49.addComponentOrReplace(gltfShape50)
const transform460 = new Transform({
  position: new Vector3(8, 6.910034500151596e-8, 10.192869186401367),
  rotation: new Quaternion(-1.6199320886572466e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.0000088214874268, 1.4905658960342407, 5.112188816070557)
})
smallStoneSlabTile49.addComponentOrReplace(transform460)

const smallStoneSlabTile50 = new Entity('smallStoneSlabTile50')
engine.addEntity(smallStoneSlabTile50)
smallStoneSlabTile50.setParent(_scene)
smallStoneSlabTile50.addComponentOrReplace(gltfShape50)
const transform461 = new Transform({
  position: new Vector3(8, 6.910034500151596e-8, 0),
  rotation: new Quaternion(-1.6199320886572466e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.0000088214874268, 1.4905658960342407, 5.112188816070557)
})
smallStoneSlabTile50.addComponentOrReplace(transform461)

const smallStoneSlabTile52 = new Entity('smallStoneSlabTile52')
engine.addEntity(smallStoneSlabTile52)
smallStoneSlabTile52.setParent(_scene)
smallStoneSlabTile52.addComponentOrReplace(gltfShape50)
const transform462 = new Transform({
  position: new Vector3(16.081748962402344, 2.8312206268310547e-7, 7.714674949645996),
  rotation: new Quaternion(-8.67840523361839e-16, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.000012159347534, 1.4905658960342407, 4.29567289352417)
})
smallStoneSlabTile52.addComponentOrReplace(transform462)

const smallStoneSlabTile53 = new Entity('smallStoneSlabTile53')
engine.addEntity(smallStoneSlabTile53)
smallStoneSlabTile53.setParent(_scene)
smallStoneSlabTile53.addComponentOrReplace(gltfShape50)
const transform463 = new Transform({
  position: new Vector3(16, 6.910034500151596e-8, 3.279315948486328),
  rotation: new Quaternion(-8.67840523361839e-16, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.0000131130218506, 1.4905658960342407, 4.500027179718018)
})
smallStoneSlabTile53.addComponentOrReplace(transform463)

const smallStoneSlabTile54 = new Entity('smallStoneSlabTile54')
engine.addEntity(smallStoneSlabTile54)
smallStoneSlabTile54.setParent(_scene)
smallStoneSlabTile54.addComponentOrReplace(gltfShape50)
const transform464 = new Transform({
  position: new Vector3(16, 6.910034500151596e-8, 0),
  rotation: new Quaternion(-8.67840523361839e-16, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(2.0000131130218506, 1.4905658960342407, 4.156632423400879)
})
smallStoneSlabTile54.addComponentOrReplace(transform464)

const smallStoneSlabTile55 = new Entity('smallStoneSlabTile55')
engine.addEntity(smallStoneSlabTile55)
smallStoneSlabTile55.setParent(_scene)
smallStoneSlabTile55.addComponentOrReplace(gltfShape50)
const transform465 = new Transform({
  position: new Vector3(64, 6.910034500151596e-8, 12),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000016450881958, 1.4905658960342407, 4.111756324768066)
})
smallStoneSlabTile55.addComponentOrReplace(transform465)

const smallStoneSlabTile40 = new Entity('smallStoneSlabTile40')
engine.addEntity(smallStoneSlabTile40)
smallStoneSlabTile40.setParent(_scene)
smallStoneSlabTile40.addComponentOrReplace(gltfShape50)
const transform466 = new Transform({
  position: new Vector3(60.5, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000018358230591, 1.4905658960342407, 4.158211708068848)
})
smallStoneSlabTile40.addComponentOrReplace(transform466)

const smallStoneSlabTile61 = new Entity('smallStoneSlabTile61')
engine.addEntity(smallStoneSlabTile61)
smallStoneSlabTile61.setParent(_scene)
smallStoneSlabTile61.addComponentOrReplace(gltfShape50)
const transform467 = new Transform({
  position: new Vector3(64, 6.910034500151596e-8, 20),
  rotation: new Quaternion(-1.220927477974215e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000174045562744, 1.4905658960342407, 4.111758232116699)
})
smallStoneSlabTile61.addComponentOrReplace(transform467)

const smallStoneSlabTile63 = new Entity('smallStoneSlabTile63')
engine.addEntity(smallStoneSlabTile63)
smallStoneSlabTile63.setParent(_scene)
smallStoneSlabTile63.addComponentOrReplace(gltfShape50)
const transform468 = new Transform({
  position: new Vector3(38.59774398803711, 6.910034500151596e-8, 24.479816436767578),
  rotation: new Quaternion(-4.15760828203853e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.0000100135803223, 1.4905658960342407, 4.500020503997803)
})
smallStoneSlabTile63.addComponentOrReplace(transform468)

const smallStoneSlabTile64 = new Entity('smallStoneSlabTile64')
engine.addEntity(smallStoneSlabTile64)
smallStoneSlabTile64.setParent(_scene)
smallStoneSlabTile64.addComponentOrReplace(gltfShape50)
const transform469 = new Transform({
  position: new Vector3(38.59774398803711, 6.910034500151596e-8, 28.959543228149414),
  rotation: new Quaternion(-4.15760828203853e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.0000100135803223, 1.4905658960342407, 4.500020503997803)
})
smallStoneSlabTile64.addComponentOrReplace(transform469)

const smallStoneSlabTile65 = new Entity('smallStoneSlabTile65')
engine.addEntity(smallStoneSlabTile65)
smallStoneSlabTile65.setParent(_scene)
smallStoneSlabTile65.addComponentOrReplace(gltfShape50)
const transform470 = new Transform({
  position: new Vector3(38.59774398803711, 6.910034500151596e-8, 33.437278747558594),
  rotation: new Quaternion(-4.15760828203853e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.0000100135803223, 1.4905658960342407, 4.500020503997803)
})
smallStoneSlabTile65.addComponentOrReplace(transform470)

const smallStoneSlabTile66 = new Entity('smallStoneSlabTile66')
engine.addEntity(smallStoneSlabTile66)
smallStoneSlabTile66.setParent(_scene)
smallStoneSlabTile66.addComponentOrReplace(gltfShape50)
const transform471 = new Transform({
  position: new Vector3(38.59774398803711, 6.910034500151596e-8, 37.91709518432617),
  rotation: new Quaternion(-4.15760828203853e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.0000100135803223, 1.4905658960342407, 4.500020503997803)
})
smallStoneSlabTile66.addComponentOrReplace(transform471)

const smallStoneSlabTile67 = new Entity('smallStoneSlabTile67')
engine.addEntity(smallStoneSlabTile67)
smallStoneSlabTile67.setParent(_scene)
smallStoneSlabTile67.addComponentOrReplace(gltfShape50)
const transform472 = new Transform({
  position: new Vector3(38.59774398803711, 6.910034500151596e-8, 42.39682388305664),
  rotation: new Quaternion(-4.15760828203853e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.0000100135803223, 1.4905658960342407, 4.500020503997803)
})
smallStoneSlabTile67.addComponentOrReplace(transform472)

const smallStoneSlabTile68 = new Entity('smallStoneSlabTile68')
engine.addEntity(smallStoneSlabTile68)
smallStoneSlabTile68.setParent(_scene)
smallStoneSlabTile68.addComponentOrReplace(gltfShape50)
const transform473 = new Transform({
  position: new Vector3(38.59774398803711, 6.910034500151596e-8, 46.81386184692383),
  rotation: new Quaternion(-4.15760828203853e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.0000100135803223, 1.4905658960342407, 4.500020503997803)
})
smallStoneSlabTile68.addComponentOrReplace(transform473)

const smallStoneSlabTile69 = new Entity('smallStoneSlabTile69')
engine.addEntity(smallStoneSlabTile69)
smallStoneSlabTile69.setParent(_scene)
smallStoneSlabTile69.addComponentOrReplace(gltfShape50)
const transform474 = new Transform({
  position: new Vector3(38.59774398803711, 6.910034500151596e-8, 51.293678283691406),
  rotation: new Quaternion(-4.15760828203853e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.0000100135803223, 1.4905658960342407, 4.500020503997803)
})
smallStoneSlabTile69.addComponentOrReplace(transform474)

const smallStoneSlabTile71 = new Entity('smallStoneSlabTile71')
engine.addEntity(smallStoneSlabTile71)
smallStoneSlabTile71.setParent(_scene)
smallStoneSlabTile71.addComponentOrReplace(gltfShape50)
const transform475 = new Transform({
  position: new Vector3(38.59774398803711, 6.910034500151596e-8, 55.82193374633789),
  rotation: new Quaternion(-4.15760828203853e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.0000100135803223, 1.4905658960342407, 4.128493309020996)
})
smallStoneSlabTile71.addComponentOrReplace(transform475)

const smallStoneSlabTile70 = new Entity('smallStoneSlabTile70')
engine.addEntity(smallStoneSlabTile70)
smallStoneSlabTile70.setParent(_scene)
smallStoneSlabTile70.addComponentOrReplace(gltfShape50)
const transform476 = new Transform({
  position: new Vector3(38.59774398803711, 6.910034500151596e-8, 59.90764236450195),
  rotation: new Quaternion(-4.15760828203853e-15, 1, -1.1920928955078125e-7, 5.960464477539063e-8),
  scale: new Vector3(2.0000100135803223, 1.4905658960342407, 4.128493309020996)
})
smallStoneSlabTile70.addComponentOrReplace(transform476)

const horizontalPlatform = new Entity('horizontalPlatform')
engine.addEntity(horizontalPlatform)
horizontalPlatform.setParent(_scene)
const transform477 = new Transform({
  position: new Vector3(32, 48.5, 34),
  rotation: new Quaternion(1.6041650997396999e-15, 0.3890877664089203, -4.638287265379404e-8, -0.921200692653656),
  scale: new Vector3(15.714815139770508, 4.5, 13.592662811279297)
})
horizontalPlatform.addComponentOrReplace(transform477)

const ringBlueLight = new Entity('ringBlueLight')
engine.addEntity(ringBlueLight)
ringBlueLight.setParent(_scene)
const transform478 = new Transform({
  position: new Vector3(7.5, 42.900474548339844, 13),
  rotation: new Quaternion(-0.6532814502716064, 0.27059808373451233, 0.2705981135368347, 0.653281569480896),
  scale: new Vector3(4.385393142700195, 6.000034332275391, 4.879386901855469)
})
ringBlueLight.addComponentOrReplace(transform478)
const gltfShape51 = new GLTFShape("models/Ring_Blue_Light.glb")
gltfShape51.withCollisions = true
gltfShape51.isPointerBlocker = true
gltfShape51.visible = true
ringBlueLight.addComponentOrReplace(gltfShape51)

const ringBlueLight3 = new Entity('ringBlueLight3')
engine.addEntity(ringBlueLight3)
ringBlueLight3.setParent(_scene)
ringBlueLight3.addComponentOrReplace(gltfShape51)
const transform479 = new Transform({
  position: new Vector3(6.5, 42.900474548339844, 12),
  rotation: new Quaternion(-0.6532814502716064, 0.27059808373451233, 0.2705981135368347, 0.653281569480896),
  scale: new Vector3(4.385389804840088, 24.000099182128906, 4.87938928604126)
})
ringBlueLight3.addComponentOrReplace(transform479)

const ringBlueLight2 = new Entity('ringBlueLight2')
engine.addEntity(ringBlueLight2)
ringBlueLight2.setParent(_scene)
ringBlueLight2.addComponentOrReplace(gltfShape51)
const transform480 = new Transform({
  position: new Vector3(52.5, 42.900474548339844, 56.5),
  rotation: new Quaternion(-0.2705981433391571, -0.6532816290855408, -0.6532813906669617, 0.27059805393218994),
  scale: new Vector3(4.385409832000732, 6.0000410079956055, 4.879385948181152)
})
ringBlueLight2.addComponentOrReplace(transform480)

const ringBlueLight4 = new Entity('ringBlueLight4')
engine.addEntity(ringBlueLight4)
ringBlueLight4.setParent(_scene)
ringBlueLight4.addComponentOrReplace(gltfShape51)
const transform481 = new Transform({
  position: new Vector3(53.5, 42.900474548339844, 57.5),
  rotation: new Quaternion(-0.2705981433391571, -0.6532816290855408, -0.6532813906669617, 0.27059805393218994),
  scale: new Vector3(4.385406017303467, 24.00011444091797, 4.8793864250183105)
})
ringBlueLight4.addComponentOrReplace(transform481)

const ringBlueLight5 = new Entity('ringBlueLight5')
engine.addEntity(ringBlueLight5)
ringBlueLight5.setParent(_scene)
const transform482 = new Transform({
  position: new Vector3(53.95975112915039, 0, 48.978515625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight5.addComponentOrReplace(transform482)
ringBlueLight5.addComponentOrReplace(gltfShape51)

const ringBlueLight6 = new Entity('ringBlueLight6')
engine.addEntity(ringBlueLight6)
ringBlueLight6.setParent(_scene)
ringBlueLight6.addComponentOrReplace(gltfShape51)
const transform483 = new Transform({
  position: new Vector3(53.95975112915039, 4, 48.978515625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight6.addComponentOrReplace(transform483)

const ringBlueLight7 = new Entity('ringBlueLight7')
engine.addEntity(ringBlueLight7)
ringBlueLight7.setParent(_scene)
ringBlueLight7.addComponentOrReplace(gltfShape51)
const transform484 = new Transform({
  position: new Vector3(53.791053771972656, 8, 49.021484375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight7.addComponentOrReplace(transform484)

const ringBlueLight8 = new Entity('ringBlueLight8')
engine.addEntity(ringBlueLight8)
ringBlueLight8.setParent(_scene)
ringBlueLight8.addComponentOrReplace(gltfShape51)
const transform485 = new Transform({
  position: new Vector3(53.95975112915039, 12.16788387298584, 48.978515625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight8.addComponentOrReplace(transform485)

const ornamentalFountain2 = new Entity('ornamentalFountain2')
engine.addEntity(ornamentalFountain2)
ornamentalFountain2.setParent(_scene)
const gltfShape52 = new GLTFShape("models/Fountain_02/Fountain_02.glb")
gltfShape52.withCollisions = true
gltfShape52.isPointerBlocker = true
gltfShape52.visible = true
ornamentalFountain2.addComponentOrReplace(gltfShape52)
const transform486 = new Transform({
  position: new Vector3(32.5, 58.15647506713867, 33.5),
  rotation: new Quaternion(-1.1059513315930347e-15, -0.5555702447891235, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(1.531249761581421, 1.5, 1.531249761581421)
})
ornamentalFountain2.addComponentOrReplace(transform486)

const ringBlueLight9 = new Entity('ringBlueLight9')
engine.addEntity(ringBlueLight9)
ringBlueLight9.setParent(_scene)
ringBlueLight9.addComponentOrReplace(gltfShape51)
const transform487 = new Transform({
  position: new Vector3(7.5, 42.900474548339844, 58),
  rotation: new Quaternion(-0.2705979347229004, 0.653281569480896, 0.6532814502716064, 0.2705981135368347),
  scale: new Vector3(4.385387420654297, 23.999996185302734, 4.879391670227051)
})
ringBlueLight9.addComponentOrReplace(transform487)

const ringBlueLight10 = new Entity('ringBlueLight10')
engine.addEntity(ringBlueLight10)
ringBlueLight10.setParent(_scene)
ringBlueLight10.addComponentOrReplace(gltfShape51)
const transform488 = new Transform({
  position: new Vector3(8.5, 42.900474548339844, 57),
  rotation: new Quaternion(-0.2705979347229004, 0.653281569480896, 0.6532814502716064, 0.2705981135368347),
  scale: new Vector3(4.385390281677246, 5.999999046325684, 4.879388809204102)
})
ringBlueLight10.addComponentOrReplace(transform488)

const ringBlueLight11 = new Entity('ringBlueLight11')
engine.addEntity(ringBlueLight11)
ringBlueLight11.setParent(_scene)
ringBlueLight11.addComponentOrReplace(gltfShape51)
const transform489 = new Transform({
  position: new Vector3(54.5, 42.900474548339844, 10),
  rotation: new Quaternion(-0.6532815098762512, -0.2705981433391571, -0.270597904920578, 0.6532815098762512),
  scale: new Vector3(4.385387420654297, 23.999996185302734, 4.879391670227051)
})
ringBlueLight11.addComponentOrReplace(transform489)

const ringBlueLight12 = new Entity('ringBlueLight12')
engine.addEntity(ringBlueLight12)
ringBlueLight12.setParent(_scene)
ringBlueLight12.addComponentOrReplace(gltfShape51)
const transform490 = new Transform({
  position: new Vector3(53.5, 42.900474548339844, 11),
  rotation: new Quaternion(-0.6532815098762512, -0.2705981433391571, -0.270597904920578, 0.6532815098762512),
  scale: new Vector3(4.385390281677246, 6.000000476837158, 4.879388809204102)
})
ringBlueLight12.addComponentOrReplace(transform490)

const highBuilding7 = new Entity('highBuilding7')
engine.addEntity(highBuilding7)
highBuilding7.setParent(_scene)
highBuilding7.addComponentOrReplace(gltfShape26)
const transform491 = new Transform({
  position: new Vector3(6.298595905303955, 32.38123321533203, 32.963890075683594),
  rotation: new Quaternion(2.3841855067985307e-7, 4.470348358154297e-8, -9.362497417424696e-15, -1),
  scale: new Vector3(-2.3719096183776855, 1.0775116682052612, -0.737733006477356)
})
highBuilding7.addComponentOrReplace(transform491)

const buildingDecor10 = new Entity('buildingDecor10')
engine.addEntity(buildingDecor10)
buildingDecor10.setParent(_scene)
buildingDecor10.addComponentOrReplace(gltfShape41)
const transform492 = new Transform({
  position: new Vector3(6.5, 6, 1),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0417081117630005, 1.0000038146972656, 0.8018264174461365)
})
buildingDecor10.addComponentOrReplace(transform492)

const grafittiWallShortC20 = new Entity('grafittiWallShortC20')
engine.addEntity(grafittiWallShortC20)
grafittiWallShortC20.setParent(_scene)
grafittiWallShortC20.addComponentOrReplace(gltfShape5)
const transform493 = new Transform({
  position: new Vector3(0.052776336669921875, 18.5, 31.5),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.667232990264893, 4.430461883544922, 0.07251822203397751)
})
grafittiWallShortC20.addComponentOrReplace(transform493)

const grafittiWallShortC21 = new Entity('grafittiWallShortC21')
engine.addEntity(grafittiWallShortC21)
grafittiWallShortC21.setParent(_scene)
grafittiWallShortC21.addComponentOrReplace(gltfShape5)
const transform494 = new Transform({
  position: new Vector3(0.005103111267089844, 18.5, 25.9512996673584),
  rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(-2.9341371059417725, 4.531857013702393, 0.0220741406083107)
})
grafittiWallShortC21.addComponentOrReplace(transform494)

const grafittiWallI25 = new Entity('grafittiWallI25')
engine.addEntity(grafittiWallI25)
grafittiWallI25.setParent(_scene)
grafittiWallI25.addComponentOrReplace(gltfShape8)
const transform495 = new Transform({
  position: new Vector3(0.10189056396484375, 18.5, 22.08835220336914),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1.5, 0.12109138816595078)
})
grafittiWallI25.addComponentOrReplace(transform495)

const grafittiWallShortA3 = new Entity('grafittiWallShortA3')
engine.addEntity(grafittiWallShortA3)
grafittiWallShortA3.setParent(_scene)
grafittiWallShortA3.addComponentOrReplace(gltfShape45)
const transform496 = new Transform({
  position: new Vector3(0.0908665657043457, 18.5, 0.8228564262390137),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.459078311920166, 4.253665924072266, 0.13751371204853058)
})
grafittiWallShortA3.addComponentOrReplace(transform496)

const highBuilding13 = new Entity('highBuilding13')
engine.addEntity(highBuilding13)
highBuilding13.setParent(_scene)
highBuilding13.addComponentOrReplace(gltfShape26)
const transform497 = new Transform({
  position: new Vector3(7.652000427246094, 26.5, 46.494049072265625),
  rotation: new Quaternion(-0.5000002384185791, -0.5000002384185791, 0.4999997019767761, 0.4999998211860657),
  scale: new Vector3(0.12580859661102295, 1.002898097038269, 0.8274145722389221)
})
highBuilding13.addComponentOrReplace(transform497)

const buildingDecor12 = new Entity('buildingDecor12')
engine.addEntity(buildingDecor12)
buildingDecor12.setParent(_scene)
buildingDecor12.addComponentOrReplace(gltfShape41)
const transform498 = new Transform({
  position: new Vector3(10.5, 32.02883529663086, 38.94666290283203),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.8542068600654602, 1.000004768371582, 1)
})
buildingDecor12.addComponentOrReplace(transform498)

const buildingDecor13 = new Entity('buildingDecor13')
engine.addEntity(buildingDecor13)
buildingDecor13.setParent(_scene)
buildingDecor13.addComponentOrReplace(gltfShape41)
const transform499 = new Transform({
  position: new Vector3(10.5, 32.02883529663086, 27.309070587158203),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.8542075753211975, 1.0000052452087402, 1)
})
buildingDecor13.addComponentOrReplace(transform499)

const railingStraight2 = new Entity('railingStraight2')
engine.addEntity(railingStraight2)
railingStraight2.setParent(_scene)
railingStraight2.addComponentOrReplace(gltfShape43)
const transform500 = new Transform({
  position: new Vector3(14.962723731994629, 26.645925521850586, 0.11239433288574219),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(9.025127410888672, 1, 1.0000076293945312)
})
railingStraight2.addComponentOrReplace(transform500)

const verticalBlackPad4 = new Entity('verticalBlackPad4')
engine.addEntity(verticalBlackPad4)
verticalBlackPad4.setParent(_scene)
const transform501 = new Transform({
  position: new Vector3(11.5, 5.5, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
verticalBlackPad4.addComponentOrReplace(transform501)

const toggleButton19 = new Entity('toggleButton19')
engine.addEntity(toggleButton19)
toggleButton19.setParent(_scene)
const transform502 = new Transform({
  position: new Vector3(11.560447692871094, 7.442407608032227, 46.6846923828125),
  rotation: new Quaternion(0.7071068286895752, -5.793078554838446e-16, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
toggleButton19.addComponentOrReplace(transform502)

const ringBlueLight13 = new Entity('ringBlueLight13')
engine.addEntity(ringBlueLight13)
ringBlueLight13.setParent(_scene)
ringBlueLight13.addComponentOrReplace(gltfShape51)
const transform503 = new Transform({
  position: new Vector3(11.5, 5.959756851196289, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight13.addComponentOrReplace(transform503)

const ringBlueLight14 = new Entity('ringBlueLight14')
engine.addEntity(ringBlueLight14)
ringBlueLight14.setParent(_scene)
ringBlueLight14.addComponentOrReplace(gltfShape51)
const transform504 = new Transform({
  position: new Vector3(11.5, 12.459756851196289, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight14.addComponentOrReplace(transform504)

const ringBlueLight15 = new Entity('ringBlueLight15')
engine.addEntity(ringBlueLight15)
ringBlueLight15.setParent(_scene)
ringBlueLight15.addComponentOrReplace(gltfShape51)
const transform505 = new Transform({
  position: new Vector3(11.5, 19.95975685119629, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight15.addComponentOrReplace(transform505)

const ringBlueLight16 = new Entity('ringBlueLight16')
engine.addEntity(ringBlueLight16)
ringBlueLight16.setParent(_scene)
ringBlueLight16.addComponentOrReplace(gltfShape51)
const transform506 = new Transform({
  position: new Vector3(11.5, 27.45975685119629, 48.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight16.addComponentOrReplace(transform506)

const railingStraight5 = new Entity('railingStraight5')
engine.addEntity(railingStraight5)
railingStraight5.setParent(_scene)
railingStraight5.addComponentOrReplace(gltfShape43)
const transform507 = new Transform({
  position: new Vector3(0.01942157745361328, 26.645925521850586, 50.33391189575195),
  rotation: new Quaternion(7.99081903890466e-15, -1, 1.1920926823449918e-7, -3.725290298461914e-8),
  scale: new Vector3(2.0076704025268555, 1, 1.0000079870224)
})
railingStraight5.addComponentOrReplace(transform507)

const ringBlueLight17 = new Entity('ringBlueLight17')
engine.addEntity(ringBlueLight17)
ringBlueLight17.setParent(_scene)
ringBlueLight17.addComponentOrReplace(gltfShape51)
const transform508 = new Transform({
  position: new Vector3(2.630791664123535, 26.790864944458008, 37.666133880615234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight17.addComponentOrReplace(transform508)

const verticalBlackPad5 = new Entity('verticalBlackPad5')
engine.addEntity(verticalBlackPad5)
verticalBlackPad5.setParent(_scene)
const transform509 = new Transform({
  position: new Vector3(2.6307919025421143, 26.33110809326172, 37.666133880615234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
verticalBlackPad5.addComponentOrReplace(transform509)

const toggleButton20 = new Entity('toggleButton20')
engine.addEntity(toggleButton20)
toggleButton20.setParent(_scene)
const transform510 = new Transform({
  position: new Vector3(0.8862004280090332, 28.53029441833496, 37.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.0000019073486328, 1)
})
toggleButton20.addComponentOrReplace(transform510)

const ringBlueLight18 = new Entity('ringBlueLight18')
engine.addEntity(ringBlueLight18)
ringBlueLight18.setParent(_scene)
ringBlueLight18.addComponentOrReplace(gltfShape51)
const transform511 = new Transform({
  position: new Vector3(2.6307919025421143, 34.345924377441406, 37.666133880615234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight18.addComponentOrReplace(transform511)

const ringBlueLight19 = new Entity('ringBlueLight19')
engine.addEntity(ringBlueLight19)
ringBlueLight19.setParent(_scene)
ringBlueLight19.addComponentOrReplace(gltfShape51)
const transform512 = new Transform({
  position: new Vector3(2.6307919025421143, 41.445674896240234, 37.666133880615234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight19.addComponentOrReplace(transform512)

const ringBlueLight21 = new Entity('ringBlueLight21')
engine.addEntity(ringBlueLight21)
ringBlueLight21.setParent(_scene)
ringBlueLight21.addComponentOrReplace(gltfShape51)
const transform513 = new Transform({
  position: new Vector3(2.397430419921875, 26.790864944458008, 24.589405059814453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight21.addComponentOrReplace(transform513)

const verticalBlackPad6 = new Entity('verticalBlackPad6')
engine.addEntity(verticalBlackPad6)
verticalBlackPad6.setParent(_scene)
const transform514 = new Transform({
  position: new Vector3(2.397430419921875, 26.33110809326172, 24.589405059814453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
verticalBlackPad6.addComponentOrReplace(transform514)

const toggleButton21 = new Entity('toggleButton21')
engine.addEntity(toggleButton21)
toggleButton21.setParent(_scene)
const transform515 = new Transform({
  position: new Vector3(0.8356524705886841, 28.980281829833984, 24.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1.0000019073486328, 1)
})
toggleButton21.addComponentOrReplace(transform515)

const ringBlueLight22 = new Entity('ringBlueLight22')
engine.addEntity(ringBlueLight22)
ringBlueLight22.setParent(_scene)
ringBlueLight22.addComponentOrReplace(gltfShape51)
const transform516 = new Transform({
  position: new Vector3(2.397430419921875, 33.290863037109375, 24.589405059814453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight22.addComponentOrReplace(transform516)

const ringBlueLight23 = new Entity('ringBlueLight23')
engine.addEntity(ringBlueLight23)
ringBlueLight23.setParent(_scene)
ringBlueLight23.addComponentOrReplace(gltfShape51)
const transform517 = new Transform({
  position: new Vector3(2.397430419921875, 43.790863037109375, 24.589405059814453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight23.addComponentOrReplace(transform517)

const ringBlueLight24 = new Entity('ringBlueLight24')
engine.addEntity(ringBlueLight24)
ringBlueLight24.setParent(_scene)
ringBlueLight24.addComponentOrReplace(gltfShape51)
const transform518 = new Transform({
  position: new Vector3(2.397430419921875, 51.290863037109375, 24.589405059814453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight24.addComponentOrReplace(transform518)

const ringBlueLight25 = new Entity('ringBlueLight25')
engine.addEntity(ringBlueLight25)
ringBlueLight25.setParent(_scene)
ringBlueLight25.addComponentOrReplace(gltfShape51)
const transform519 = new Transform({
  position: new Vector3(2.397430419921875, 58.290863037109375, 24.589405059814453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight25.addComponentOrReplace(transform519)

const ambientSound9 = new Entity('ambientSound9')
engine.addEntity(ambientSound9)
ambientSound9.setParent(_scene)
const transform520 = new Transform({
  position: new Vector3(34.5, 59, 40.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9, 8.75, 14.999998092651367)
})
ambientSound9.addComponentOrReplace(transform520)

const imageCubeC13 = new Entity('imageCubeC13')
engine.addEntity(imageCubeC13)
imageCubeC13.setParent(_scene)
const transform521 = new Transform({
  position: new Vector3(15.718677520751953, 26.60828399658203, 0.4741266965866089),
  rotation: new Quaternion(-9.800675184335871e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.8741657733917236, 13.156479835510254, 24.575315475463867)
})
imageCubeC13.addComponentOrReplace(transform521)

const imageCubeC15 = new Entity('imageCubeC15')
engine.addEntity(imageCubeC15)
imageCubeC15.setParent(_scene)
const transform522 = new Transform({
  position: new Vector3(0.5, 29.496570587158203, 28),
  rotation: new Quaternion(1.2432736894304412e-15, 1, -1.1920926112907182e-7, 0),
  scale: new Vector3(0.6778538823127747, 9.007034301757812, 16.398283004760742)
})
imageCubeC15.addComponentOrReplace(transform522)

const imageCubeC16 = new Entity('imageCubeC16')
engine.addEntity(imageCubeC16)
imageCubeC16.setParent(_scene)
const transform523 = new Transform({
  position: new Vector3(12.138463973999023, 53.05533981323242, 39.603736877441406),
  rotation: new Quaternion(-1.3331727689576238e-14, 0.7071068286895752, -8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(2.9749460220336914, 7.109029293060303, 18.65700340270996)
})
imageCubeC16.addComponentOrReplace(transform523)

const imageCubeC17 = new Entity('imageCubeC17')
engine.addEntity(imageCubeC17)
imageCubeC17.setParent(_scene)
const transform524 = new Transform({
  position: new Vector3(15, 26.60828399658203, 11.5),
  rotation: new Quaternion(8.115500594674599e-15, 0, -5.402340562204143e-15, -1),
  scale: new Vector3(1.0632102489471436, 13.156479835510254, 17.4686222076416)
})
imageCubeC17.addComponentOrReplace(transform524)

const imageCubeC18 = new Entity('imageCubeC18')
engine.addEntity(imageCubeC18)
imageCubeC18.setParent(_scene)
const transform525 = new Transform({
  position: new Vector3(1.5831866264343262, 26.60828399658203, 12.5),
  rotation: new Quaternion(8.115500594674599e-15, 0, -5.402340562204143e-15, -1),
  scale: new Vector3(1.4480829238891602, 13.156479835510254, 19.231502532958984)
})
imageCubeC18.addComponentOrReplace(transform525)

const imageCubeC19 = new Entity('imageCubeC19')
engine.addEntity(imageCubeC19)
imageCubeC19.setParent(_scene)
const transform526 = new Transform({
  position: new Vector3(16.5, 34.10828399658203, 15.655609130859375),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, -0.5),
  scale: new Vector3(1.8241664171218872, 23.754074096679688, 24.48716926574707)
})
imageCubeC19.addComponentOrReplace(transform526)

const coffeeHouse6 = new Entity('coffeeHouse6')
engine.addEntity(coffeeHouse6)
coffeeHouse6.setParent(_scene)
coffeeHouse6.addComponentOrReplace(gltfShape11)
const transform527 = new Transform({
  position: new Vector3(3.7983779907226562, 27, 3.2826788425445557),
  rotation: new Quaternion(1.375729419469398e-15, -5.960464477539063e-8, 3.8667320857537196e-15, -1),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
coffeeHouse6.addComponentOrReplace(transform527)

const umbrellaTable8 = new Entity('umbrellaTable8')
engine.addEntity(umbrellaTable8)
umbrellaTable8.setParent(_scene)
umbrellaTable8.addComponentOrReplace(gltfShape30)
const transform528 = new Transform({
  position: new Vector3(9, 27, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
umbrellaTable8.addComponentOrReplace(transform528)

const buildingDecor14 = new Entity('buildingDecor14')
engine.addEntity(buildingDecor14)
buildingDecor14.setParent(_scene)
buildingDecor14.addComponentOrReplace(gltfShape41)
const transform529 = new Transform({
  position: new Vector3(11.5, 19.488849639892578, 1),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.2060316801071167, 1.0000061988830566, 0.8018264174461365)
})
buildingDecor14.addComponentOrReplace(transform529)

const imageCubeB14 = new Entity('imageCubeB14')
engine.addEntity(imageCubeB14)
imageCubeB14.setParent(_scene)
const transform530 = new Transform({
  position: new Vector3(1.3082146644592285, 35.550621032714844, 41.1407470703125),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.569303512573242, 6.769559383392334, 16.15854835510254)
})
imageCubeB14.addComponentOrReplace(transform530)

const imageCubeB18 = new Entity('imageCubeB18')
engine.addEntity(imageCubeB18)
imageCubeB18.setParent(_scene)
const transform531 = new Transform({
  position: new Vector3(13.224186897277832, 16.26659393310547, 2.3102707862854004),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.569303512573242, 2.5, 3.1213736534118652)
})
imageCubeB18.addComponentOrReplace(transform531)

const imageCubeB19 = new Entity('imageCubeB19')
engine.addEntity(imageCubeB19)
imageCubeB19.setParent(_scene)
const transform532 = new Transform({
  position: new Vector3(12.217658042907715, 16.26659393310547, 46.88003921508789),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.569303512573242, 2.5, 2.2952442169189453)
})
imageCubeB19.addComponentOrReplace(transform532)

const floorGlass = new Entity('floorGlass')
engine.addEntity(floorGlass)
floorGlass.setParent(_scene)
const transform533 = new Transform({
  position: new Vector3(14.5, 26.5, 23),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.5, 9.509791374206543, 5.612963676452637)
})
floorGlass.addComponentOrReplace(transform533)
const gltfShape53 = new GLTFShape("models/GlassFloor.glb")
gltfShape53.withCollisions = true
gltfShape53.isPointerBlocker = true
gltfShape53.visible = true
floorGlass.addComponentOrReplace(gltfShape53)

const railingStraight15 = new Entity('railingStraight15')
engine.addEntity(railingStraight15)
railingStraight15.setParent(_scene)
railingStraight15.addComponentOrReplace(gltfShape43)
const transform534 = new Transform({
  position: new Vector3(15, 26.645925521850586, 1),
  rotation: new Quaternion(-2.177062080483132e-15, 0, -1.088531040241566e-15, 1),
  scale: new Vector3(2.8984293937683105, 1, 1.0000039339065552)
})
railingStraight15.addComponentOrReplace(transform534)

const railingStraight22 = new Entity('railingStraight22')
engine.addEntity(railingStraight22)
railingStraight22.setParent(_scene)
railingStraight22.addComponentOrReplace(gltfShape43)
const transform535 = new Transform({
  position: new Vector3(0.5, 26.645925521850586, 0.5142390131950378),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(9.75686264038086, 1, 1.0000090599060059)
})
railingStraight22.addComponentOrReplace(transform535)

const floorGlass2 = new Entity('floorGlass2')
engine.addEntity(floorGlass2)
floorGlass2.setParent(_scene)
floorGlass2.addComponentOrReplace(gltfShape53)
const transform536 = new Transform({
  position: new Vector3(55.50096130371094, 22.851106643676758, 46.42922592163086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7406818866729736, 31.298622131347656, 3.2262179851531982)
})
floorGlass2.addComponentOrReplace(transform536)

const coffeeHouse7 = new Entity('coffeeHouse7')
engine.addEntity(coffeeHouse7)
coffeeHouse7.setParent(_scene)
coffeeHouse7.addComponentOrReplace(gltfShape11)
const transform537 = new Transform({
  position: new Vector3(54, 28.276187896728516, 4.5),
  rotation: new Quaternion(1.375729419469398e-15, -5.960464477539063e-8, 3.8667320857537196e-15, -1),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
coffeeHouse7.addComponentOrReplace(transform537)

const floorGlass3 = new Entity('floorGlass3')
engine.addEntity(floorGlass3)
floorGlass3.setParent(_scene)
floorGlass3.addComponentOrReplace(gltfShape53)
const transform538 = new Transform({
  position: new Vector3(10.332765579223633, 26.5, 50.82784652709961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.565000057220459, 9.509791374206543, 1.234231948852539)
})
floorGlass3.addComponentOrReplace(transform538)

const stairsFireEscape5 = new Entity('stairsFireEscape5')
engine.addEntity(stairsFireEscape5)
stairsFireEscape5.setParent(_scene)
stairsFireEscape5.addComponentOrReplace(gltfShape40)
const transform539 = new Transform({
  position: new Vector3(2.5, 26, 45.896636962890625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.6825714111328125, 1.6964783668518066)
})
stairsFireEscape5.addComponentOrReplace(transform539)

const imageCubeC21 = new Entity('imageCubeC21')
engine.addEntity(imageCubeC21)
imageCubeC21.setParent(_scene)
const transform540 = new Transform({
  position: new Vector3(35.555397033691406, 44.67103958129883, 53),
  rotation: new Quaternion(-9.800675184335871e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.6778536438941956, 8.018327713012695, 16.55820083618164)
})
imageCubeC21.addComponentOrReplace(transform540)

const floorGlass4 = new Entity('floorGlass4')
engine.addEntity(floorGlass4)
floorGlass4.setParent(_scene)
floorGlass4.addComponentOrReplace(gltfShape53)
const transform541 = new Transform({
  position: new Vector3(11.417924880981445, 41.45594787597656, 30.83941650390625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.65775465965271, 9.509791374206543, 1.0854434967041016)
})
floorGlass4.addComponentOrReplace(transform541)

const floorGlass5 = new Entity('floorGlass5')
engine.addEntity(floorGlass5)
floorGlass5.setParent(_scene)
floorGlass5.addComponentOrReplace(gltfShape53)
const transform542 = new Transform({
  position: new Vector3(11.312543869018555, 41.45594787597656, 39.08062744140625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6983896493911743, 9.509791374206543, 2.0544795989990234)
})
floorGlass5.addComponentOrReplace(transform542)

const floorGlass6 = new Entity('floorGlass6')
engine.addEntity(floorGlass6)
floorGlass6.setParent(_scene)
floorGlass6.addComponentOrReplace(gltfShape53)
const transform543 = new Transform({
  position: new Vector3(7.266574382781982, 46.185115814208984, 39.36296081542969),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.174593687057495, 9.509791374206543, 1.0854480266571045)
})
floorGlass6.addComponentOrReplace(transform543)

const ropeLight9 = new Entity('ropeLight9')
engine.addEntity(ropeLight9)
ropeLight9.setParent(_scene)
const transform544 = new Transform({
  position: new Vector3(6.011999130249023, 54.74811553955078, 33.199275970458984),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.5183330178260803, 1.0000078678131104, 1)
})
ropeLight9.addComponentOrReplace(transform544)

const ropeLight10 = new Entity('ropeLight10')
engine.addEntity(ropeLight10)
ropeLight10.setParent(_scene)
const transform545 = new Transform({
  position: new Vector3(6, 44, 41),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1.0000026226043701, 1)
})
ropeLight10.addComponentOrReplace(transform545)

const ropeLight11 = new Entity('ropeLight11')
engine.addEntity(ropeLight11)
ropeLight11.setParent(_scene)
const transform546 = new Transform({
  position: new Vector3(5.511999130249023, 54.74811553955078, 33.199275970458984),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.5183331370353699, 1.0000078678131104, 1)
})
ropeLight11.addComponentOrReplace(transform546)

const ropeLight13 = new Entity('ropeLight13')
engine.addEntity(ropeLight13)
ropeLight13.setParent(_scene)
const transform547 = new Transform({
  position: new Vector3(6.011999130249023, 54.74811553955078, 32.699275970458984),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.5183330178260803, 1.0000083446502686, 1)
})
ropeLight13.addComponentOrReplace(transform547)

const ropeLight14 = new Entity('ropeLight14')
engine.addEntity(ropeLight14)
ropeLight14.setParent(_scene)
const transform548 = new Transform({
  position: new Vector3(5.511999130249023, 54.74811553955078, 32.699275970458984),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.5183334350585938, 1.0000085830688477, 1)
})
ropeLight14.addComponentOrReplace(transform548)

const rainLight2 = new Entity('rainLight2')
engine.addEntity(rainLight2)
rainLight2.setParent(_scene)
const transform549 = new Transform({
  position: new Vector3(6.321861743927002, 52.7674446105957, 32.467689514160156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.128653049468994, 1.3307085037231445, 7.0571608543396)
})
rainLight2.addComponentOrReplace(transform549)

const ringBlueLight34 = new Entity('ringBlueLight34')
engine.addEntity(ringBlueLight34)
ringBlueLight34.setParent(_scene)
ringBlueLight34.addComponentOrReplace(gltfShape51)
const transform550 = new Transform({
  position: new Vector3(5.791492938995361, 51.3271484375, 32.92367935180664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4063974618911743, 0.14014899730682373, 0.4056089520454407)
})
ringBlueLight34.addComponentOrReplace(transform550)

const ringBlueLight35 = new Entity('ringBlueLight35')
engine.addEntity(ringBlueLight35)
ringBlueLight35.setParent(_scene)
ringBlueLight35.addComponentOrReplace(gltfShape51)
const transform551 = new Transform({
  position: new Vector3(5.791492938995361, 53.8271484375, 32.92367935180664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4063974618911743, 0.14014899730682373, 0.4056089520454407)
})
ringBlueLight35.addComponentOrReplace(transform551)

const ringBlueLight36 = new Entity('ringBlueLight36')
engine.addEntity(ringBlueLight36)
ringBlueLight36.setParent(_scene)
ringBlueLight36.addComponentOrReplace(gltfShape51)
const transform552 = new Transform({
  position: new Vector3(5.791492938995361, 55.8271484375, 32.92367935180664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4063974618911743, 0.14014899730682373, 0.4056089520454407)
})
ringBlueLight36.addComponentOrReplace(transform552)

const ringBlueLight37 = new Entity('ringBlueLight37')
engine.addEntity(ringBlueLight37)
ringBlueLight37.setParent(_scene)
ringBlueLight37.addComponentOrReplace(gltfShape51)
const transform553 = new Transform({
  position: new Vector3(5.779493808746338, 57.8271484375, 33.224403381347656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4063974618911743, 0.14014899730682373, 0.4056089520454407)
})
ringBlueLight37.addComponentOrReplace(transform553)

const ringBlueLight28 = new Entity('ringBlueLight28')
engine.addEntity(ringBlueLight28)
ringBlueLight28.setParent(_scene)
ringBlueLight28.addComponentOrReplace(gltfShape51)
const transform554 = new Transform({
  position: new Vector3(5.810052394866943, 51.15998458862305, 32.92884826660156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.1127169132232666, 60.01782989501953, -0.10115408152341843)
})
ringBlueLight28.addComponentOrReplace(transform554)

const imageCubeC14 = new Entity('imageCubeC14')
engine.addEntity(imageCubeC14)
imageCubeC14.setParent(_scene)
const transform555 = new Transform({
  position: new Vector3(5.160585403442383, 50.604652404785156, 32.14595031738281),
  rotation: new Quaternion(1.2432736894304412e-15, 1, -1.1920926112907182e-7, 0),
  scale: new Vector3(2.2989842891693115, 1.6968010663986206, 2.5160300731658936)
})
imageCubeC14.addComponentOrReplace(transform555)

const stairsFireEscape7 = new Entity('stairsFireEscape7')
engine.addEntity(stairsFireEscape7)
stairsFireEscape7.setParent(_scene)
stairsFireEscape7.addComponentOrReplace(gltfShape40)
const transform556 = new Transform({
  position: new Vector3(7.250044345855713, 41.69367218017578, 28.79427146911621),
  rotation: new Quaternion(2.6829527199889996e-15, 0.70710688829422, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.0000085830688477, 1.192955493927002, 1.202584981918335)
})
stairsFireEscape7.addComponentOrReplace(transform556)

const imageComputerScreen6 = new Entity('imageComputerScreen6')
engine.addEntity(imageComputerScreen6)
imageComputerScreen6.setParent(_scene)
const transform557 = new Transform({
  position: new Vector3(8.013748168945312, 47.489688873291016, 33.041786193847656),
  rotation: new Quaternion(-0.006827345583587885, 0.7070737481117249, -0.006827430333942175, 0.707073986530304),
  scale: new Vector3(1.3931450843811035, 1.000146746635437, 1.0000137090682983)
})
imageComputerScreen6.addComponentOrReplace(transform557)

const tieredDesk6 = new Entity('tieredDesk6')
engine.addEntity(tieredDesk6)
tieredDesk6.setParent(_scene)
tieredDesk6.addComponentOrReplace(gltfShape31)
const transform558 = new Transform({
  position: new Vector3(7.756653785705566, 46.47041702270508, 33.04124069213867),
  rotation: new Quaternion(-1.8338432714645053e-14, 0.7071067690849304, -8.429369557916289e-8, 0.70710688829422),
  scale: new Vector3(1.5000219345092773, 1, 1.5000219345092773)
})
tieredDesk6.addComponentOrReplace(transform558)

const imageComputerScreen8 = new Entity('imageComputerScreen8')
engine.addEntity(imageComputerScreen8)
imageComputerScreen8.setParent(_scene)
const transform559 = new Transform({
  position: new Vector3(8.285834312438965, 47.38999938964844, 32.11171340942383),
  rotation: new Quaternion(0.0041102212853729725, -0.42567479610443115, 0.008736833930015564, -0.9048247337341309),
  scale: new Vector3(1.393141746520996, 1.000146746635437, 1.0000123977661133)
})
imageComputerScreen8.addComponentOrReplace(transform559)

const imageComputerScreen9 = new Entity('imageComputerScreen9')
engine.addEntity(imageComputerScreen9)
imageComputerScreen9.setParent(_scene)
const transform560 = new Transform({
  position: new Vector3(8.319531440734863, 47.364864349365234, 33.9632453918457),
  rotation: new Quaternion(-0.00869599636644125, 0.9006005525588989, -0.00419593183323741, 0.4345405697822571),
  scale: new Vector3(1.3931448459625244, 1.000146746635437, 1.0000152587890625)
})
imageComputerScreen9.addComponentOrReplace(transform560)

const wallPlainBlack18 = new Entity('wallPlainBlack18')
engine.addEntity(wallPlainBlack18)
wallPlainBlack18.setParent(_scene)
wallPlainBlack18.addComponentOrReplace(gltfShape49)
const transform561 = new Transform({
  position: new Vector3(12.018983840942383, 34.99296569824219, 26.763301849365234),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.673069953918457, 5.755544662475586, 0.5920528173446655)
})
wallPlainBlack18.addComponentOrReplace(transform561)

const wallPlainBlack19 = new Entity('wallPlainBlack19')
engine.addEntity(wallPlainBlack19)
wallPlainBlack19.setParent(_scene)
wallPlainBlack19.addComponentOrReplace(gltfShape49)
const transform562 = new Transform({
  position: new Vector3(12.152961730957031, 36.65163803100586, 39.255889892578125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.673069953918457, 5.314455032348633, -0.04992210492491722)
})
wallPlainBlack19.addComponentOrReplace(transform562)

const wallPlainBlack20 = new Entity('wallPlainBlack20')
engine.addEntity(wallPlainBlack20)
wallPlainBlack20.setParent(_scene)
wallPlainBlack20.addComponentOrReplace(gltfShape49)
const transform563 = new Transform({
  position: new Vector3(0.6760709285736084, 34.92398452758789, 39.588592529296875),
  rotation: new Quaternion(4.3984329838327283e-16, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(6.5262980461120605, 3.5121703147888184, 0.5920554399490356)
})
wallPlainBlack20.addComponentOrReplace(transform563)

const floorGlass7 = new Entity('floorGlass7')
engine.addEntity(floorGlass7)
floorGlass7.setParent(_scene)
floorGlass7.addComponentOrReplace(gltfShape53)
const transform564 = new Transform({
  position: new Vector3(44.51432418823242, 32.50661087036133, 63.79393005371094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.069108963012695, 9.509791374206543, 4.596477508544922)
})
floorGlass7.addComponentOrReplace(transform564)

const buildingDecor15 = new Entity('buildingDecor15')
engine.addEntity(buildingDecor15)
buildingDecor15.setParent(_scene)
buildingDecor15.addComponentOrReplace(gltfShape41)
const transform565 = new Transform({
  position: new Vector3(36.879634857177734, 16.356889724731445, 62.24287414550781),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.7593579292297363, 1.0000147819519043, 0.8018264174461365)
})
buildingDecor15.addComponentOrReplace(transform565)

const wallPlainBlack21 = new Entity('wallPlainBlack21')
engine.addEntity(wallPlainBlack21)
wallPlainBlack21.setParent(_scene)
wallPlainBlack21.addComponentOrReplace(gltfShape49)
const transform566 = new Transform({
  position: new Vector3(37.300941467285156, 37.99296569824219, 63.766578674316406),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.935015678405762, 4.470831871032715, 1.2981897592544556)
})
wallPlainBlack21.addComponentOrReplace(transform566)

const wallPlainBlack23 = new Entity('wallPlainBlack23')
engine.addEntity(wallPlainBlack23)
wallPlainBlack23.setParent(_scene)
wallPlainBlack23.addComponentOrReplace(gltfShape49)
const transform567 = new Transform({
  position: new Vector3(37.05445861816406, 37.99296569824219, 52.43865966796875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.927046775817871, 4.470831871032715, 1)
})
wallPlainBlack23.addComponentOrReplace(transform567)

const railingStraight25 = new Entity('railingStraight25')
engine.addEntity(railingStraight25)
railingStraight25.setParent(_scene)
railingStraight25.addComponentOrReplace(gltfShape43)
const transform568 = new Transform({
  position: new Vector3(0.8550475239753723, 32.64592742919922, 45.361656188964844),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.6137237548828125, 1, 1.0000128746032715)
})
railingStraight25.addComponentOrReplace(transform568)

const railingStraight26 = new Entity('railingStraight26')
engine.addEntity(railingStraight26)
railingStraight26.setParent(_scene)
railingStraight26.addComponentOrReplace(gltfShape43)
const transform569 = new Transform({
  position: new Vector3(4.543307304382324, 32.64592742919922, 45.41865921020508),
  rotation: new Quaternion(2.319603749462401e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(7.809291839599609, 1, 1.0000114440917969)
})
railingStraight26.addComponentOrReplace(transform569)

const railingStraight27 = new Entity('railingStraight27')
engine.addEntity(railingStraight27)
railingStraight27.setParent(_scene)
railingStraight27.addComponentOrReplace(gltfShape43)
const transform570 = new Transform({
  position: new Vector3(0.030809402465820312, 32.64592742919922, 63.41835021972656),
  rotation: new Quaternion(2.319603749462401e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(8.808648109436035, 1, 1.0000114440917969)
})
railingStraight27.addComponentOrReplace(transform570)

const wallPlainBlack24 = new Entity('wallPlainBlack24')
engine.addEntity(wallPlainBlack24)
wallPlainBlack24.setParent(_scene)
wallPlainBlack24.addComponentOrReplace(gltfShape49)
const transform571 = new Transform({
  position: new Vector3(37.20226287841797, 43.33998107910156, 60.55780792236328),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.9852213859558105, 2.1867997646331787, 1.4137192964553833)
})
wallPlainBlack24.addComponentOrReplace(transform571)

const wallPlainBlack25 = new Entity('wallPlainBlack25')
engine.addEntity(wallPlainBlack25)
wallPlainBlack25.setParent(_scene)
wallPlainBlack25.addComponentOrReplace(gltfShape49)
const transform572 = new Transform({
  position: new Vector3(37.115631103515625, 50.83998107910156, 60.48576354980469),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.924957275390625, 2.052819013595581, 1.413718342781067)
})
wallPlainBlack25.addComponentOrReplace(transform572)

const buildingDecor16 = new Entity('buildingDecor16')
engine.addEntity(buildingDecor16)
buildingDecor16.setParent(_scene)
buildingDecor16.addComponentOrReplace(gltfShape41)
const transform573 = new Transform({
  position: new Vector3(23.5, 37.89962387084961, 63),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.8542100191116333, 1.000006914138794, 1)
})
buildingDecor16.addComponentOrReplace(transform573)

const buildingDecor17 = new Entity('buildingDecor17')
engine.addEntity(buildingDecor17)
buildingDecor17.setParent(_scene)
buildingDecor17.addComponentOrReplace(gltfShape41)
const transform574 = new Transform({
  position: new Vector3(35, 37.89962387084961, 63),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.8542094826698303, 1.000006914138794, 1)
})
buildingDecor17.addComponentOrReplace(transform574)

const buildingDecor18 = new Entity('buildingDecor18')
engine.addEntity(buildingDecor18)
buildingDecor18.setParent(_scene)
buildingDecor18.addComponentOrReplace(gltfShape41)
const transform575 = new Transform({
  position: new Vector3(23.5, 37.89962387084961, 52),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.8542103171348572, 1.0000076293945312, 1)
})
buildingDecor18.addComponentOrReplace(transform575)

const buildingDecor19 = new Entity('buildingDecor19')
engine.addEntity(buildingDecor19)
buildingDecor19.setParent(_scene)
buildingDecor19.addComponentOrReplace(gltfShape41)
const transform576 = new Transform({
  position: new Vector3(35.5, 37.89962387084961, 52),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.8542103171348572, 1.0000078678131104, 1)
})
buildingDecor19.addComponentOrReplace(transform576)

const wallPlainBlack26 = new Entity('wallPlainBlack26')
engine.addEntity(wallPlainBlack26)
wallPlainBlack26.setParent(_scene)
wallPlainBlack26.addComponentOrReplace(gltfShape49)
const transform577 = new Transform({
  position: new Vector3(37, 37.99296569824219, 63.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.6512885093688965, 4.470831871032715, 1.5442808866500854)
})
wallPlainBlack26.addComponentOrReplace(transform577)

const wallPlainBlack27 = new Entity('wallPlainBlack27')
engine.addEntity(wallPlainBlack27)
wallPlainBlack27.setParent(_scene)
wallPlainBlack27.addComponentOrReplace(gltfShape49)
const transform578 = new Transform({
  position: new Vector3(23.203031539916992, 37.99296569824219, 63.544410705566406),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.651288032531738, 4.470831871032715, 1.1975563764572144)
})
wallPlainBlack27.addComponentOrReplace(transform578)

const verticalBlackPad7 = new Entity('verticalBlackPad7')
engine.addEntity(verticalBlackPad7)
verticalBlackPad7.setParent(_scene)
const transform579 = new Transform({
  position: new Vector3(30.16896629333496, 32.3420295715332, 62.01008605957031),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 0.8562764525413513, 1.5)
})
verticalBlackPad7.addComponentOrReplace(transform579)

const ringBlueLight27 = new Entity('ringBlueLight27')
engine.addEntity(ringBlueLight27)
ringBlueLight27.setParent(_scene)
ringBlueLight27.addComponentOrReplace(gltfShape51)
const transform580 = new Transform({
  position: new Vector3(30.16896629333496, 50.762351989746094, 62.01008605957031),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight27.addComponentOrReplace(transform580)

const toggleButton22 = new Entity('toggleButton22')
engine.addEntity(toggleButton22)
toggleButton22.setParent(_scene)
const transform581 = new Transform({
  position: new Vector3(30.223684310913086, 34.80614471435547, 63.4998664855957),
  rotation: new Quaternion(-0.4898260235786438, 0.4898260533809662, -0.5099711418151855, 0.509971022605896),
  scale: new Vector3(1.000005841255188, 1.0000076293945312, 1.0000027418136597)
})
toggleButton22.addComponentOrReplace(transform581)

const tieredDesk7 = new Entity('tieredDesk7')
engine.addEntity(tieredDesk7)
tieredDesk7.setParent(_scene)
tieredDesk7.addComponentOrReplace(gltfShape31)
const transform582 = new Transform({
  position: new Vector3(29.996238708496094, 50.84433364868164, 55.9290657043457),
  rotation: new Quaternion(-1.4210853868169056e-14, -1.4156101713069802e-7, 8.411597902046285e-15, 1),
  scale: new Vector3(1.5000191926956177, 1, 1.5000191926956177)
})
tieredDesk7.addComponentOrReplace(transform582)

const imageComputerScreen10 = new Entity('imageComputerScreen10')
engine.addEntity(imageComputerScreen10)
imageComputerScreen10.setParent(_scene)
const transform583 = new Transform({
  position: new Vector3(29.99569320678711, 51.86360549926758, 56.186161041259766),
  rotation: new Quaternion(2.1859865306783632e-10, -2.023156184804975e-7, -0.00965532474219799, 0.9999533891677856),
  scale: new Vector3(1.393144130706787, 1.000146746635437, 1.000012993812561)
})
imageComputerScreen10.addComponentOrReplace(transform583)

const imageComputerScreen11 = new Entity('imageComputerScreen11')
engine.addEntity(imageComputerScreen11)
imageComputerScreen11.setParent(_scene)
const transform584 = new Transform({
  position: new Vector3(29.074234008789062, 51.7387809753418, 56.491947174072266),
  rotation: new Quaternion(-0.0031821022275835276, 0.32955417037010193, -0.009115934371948242, 0.9440873861312866),
  scale: new Vector3(1.3931455612182617, 1.000146746635437, 1.0000152587890625)
})
imageComputerScreen11.addComponentOrReplace(transform584)

const imageComputerScreen12 = new Entity('imageComputerScreen12')
engine.addEntity(imageComputerScreen12)
imageComputerScreen12.setParent(_scene)
const transform585 = new Transform({
  position: new Vector3(30.925765991210938, 51.763916015625, 56.458248138427734),
  rotation: new Quaternion(-0.003271473105996847, 0.3388102054595947, 0.00908416323363781, -0.940805196762085),
  scale: new Vector3(1.3931431770324707, 1.000146746635437, 1.0000131130218506)
})
imageComputerScreen12.addComponentOrReplace(transform585)

const tieredDesk8 = new Entity('tieredDesk8')
engine.addEntity(tieredDesk8)
tieredDesk8.setParent(_scene)
tieredDesk8.addComponentOrReplace(gltfShape31)
const transform586 = new Transform({
  position: new Vector3(29.996238708496094, 43.36543273925781, 55.4290657043457),
  rotation: new Quaternion(-1.4210853868169056e-14, -1.4156101713069802e-7, 8.411597902046285e-15, 1),
  scale: new Vector3(1.5000191926956177, 1, 1.5000191926956177)
})
tieredDesk8.addComponentOrReplace(transform586)

const imageComputerScreen13 = new Entity('imageComputerScreen13')
engine.addEntity(imageComputerScreen13)
imageComputerScreen13.setParent(_scene)
const transform587 = new Transform({
  position: new Vector3(29.99569320678711, 44.38470458984375, 55.686161041259766),
  rotation: new Quaternion(2.1859865306783632e-10, -2.023156184804975e-7, -0.00965532474219799, 0.9999533891677856),
  scale: new Vector3(1.3931444883346558, 1.000146746635437, 1.000012993812561)
})
imageComputerScreen13.addComponentOrReplace(transform587)

const imageComputerScreen14 = new Entity('imageComputerScreen14')
engine.addEntity(imageComputerScreen14)
imageComputerScreen14.setParent(_scene)
const transform588 = new Transform({
  position: new Vector3(29.074234008789062, 44.25988006591797, 55.991947174072266),
  rotation: new Quaternion(-0.0031821022275835276, 0.32955417037010193, -0.009115934371948242, 0.9440873861312866),
  scale: new Vector3(1.3931455612182617, 1.000146746635437, 1.0000152587890625)
})
imageComputerScreen14.addComponentOrReplace(transform588)

const imageComputerScreen15 = new Entity('imageComputerScreen15')
engine.addEntity(imageComputerScreen15)
imageComputerScreen15.setParent(_scene)
const transform589 = new Transform({
  position: new Vector3(30.925765991210938, 44.28501510620117, 55.958248138427734),
  rotation: new Quaternion(-0.003271473105996847, 0.3388102054595947, 0.00908416323363781, -0.940805196762085),
  scale: new Vector3(1.3931431770324707, 1.000146746635437, 1.0000131130218506)
})
imageComputerScreen15.addComponentOrReplace(transform589)

const ringBlueLight29 = new Entity('ringBlueLight29')
engine.addEntity(ringBlueLight29)
ringBlueLight29.setParent(_scene)
ringBlueLight29.addComponentOrReplace(gltfShape51)
const transform590 = new Transform({
  position: new Vector3(30.16896629333496, 43.230186462402344, 62.01008605957031),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6255903244018555, 1, 1.6224360466003418)
})
ringBlueLight29.addComponentOrReplace(transform590)

const wallPlainBlack28 = new Entity('wallPlainBlack28')
engine.addEntity(wallPlainBlack28)
wallPlainBlack28.setParent(_scene)
wallPlainBlack28.addComponentOrReplace(gltfShape49)
const transform591 = new Transform({
  position: new Vector3(37.223487854003906, 56.06529235839844, 63.484004974365234),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.924957275390625, 2.7919483184814453, 1.4835565090179443)
})
wallPlainBlack28.addComponentOrReplace(transform591)

const floorGlass8 = new Entity('floorGlass8')
engine.addEntity(floorGlass8)
floorGlass8.setParent(_scene)
floorGlass8.addComponentOrReplace(gltfShape53)
const transform592 = new Transform({
  position: new Vector3(44.51432418823242, 32.50661087036133, 63.79393005371094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.069108963012695, 9.509791374206543, 4.596477508544922)
})
floorGlass8.addComponentOrReplace(transform592)

const imageCubeC23 = new Entity('imageCubeC23')
engine.addEntity(imageCubeC23)
imageCubeC23.setParent(_scene)
const transform593 = new Transform({
  position: new Vector3(38.28059387207031, 39.78582763671875, 50.837493896484375),
  rotation: new Quaternion(-9.800675184335871e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(2.427530288696289, 10.5, 24.517333984375)
})
imageCubeC23.addComponentOrReplace(transform593)

const sushiBar4 = new Entity('sushiBar4')
engine.addEntity(sushiBar4)
sushiBar4.setParent(_scene)
sushiBar4.addComponentOrReplace(gltfShape2)
const transform594 = new Transform({
  position: new Vector3(9.44503402709961, 32.75611877441406, 59.428184509277344),
  rotation: new Quaternion(-4.803959218814026e-15, -5.960464477539063e-8, -1.088531040241566e-15, 1),
  scale: new Vector3(1.5000004768371582, 1, 1.5000004768371582)
})
sushiBar4.addComponentOrReplace(transform594)

const railingStraight28 = new Entity('railingStraight28')
engine.addEntity(railingStraight28)
railingStraight28.setParent(_scene)
railingStraight28.addComponentOrReplace(gltfShape43)
const transform595 = new Transform({
  position: new Vector3(44.86720657348633, 32.64592742919922, 45.47437286376953),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.613724708557129, 1, 1.0000131130218506)
})
railingStraight28.addComponentOrReplace(transform595)

const umbrellaTable9 = new Entity('umbrellaTable9')
engine.addEntity(umbrellaTable9)
umbrellaTable9.setParent(_scene)
umbrellaTable9.addComponentOrReplace(gltfShape30)
const transform596 = new Transform({
  position: new Vector3(17.5, 32.79533004760742, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
umbrellaTable9.addComponentOrReplace(transform596)

const umbrellaTable10 = new Entity('umbrellaTable10')
engine.addEntity(umbrellaTable10)
umbrellaTable10.setParent(_scene)
umbrellaTable10.addComponentOrReplace(gltfShape30)
const transform597 = new Transform({
  position: new Vector3(40.5, 32.79533004760742, 49),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
umbrellaTable10.addComponentOrReplace(transform597)

const ringBlueLight31 = new Entity('ringBlueLight31')
engine.addEntity(ringBlueLight31)
ringBlueLight31.setParent(_scene)
ringBlueLight31.addComponentOrReplace(gltfShape51)
const transform598 = new Transform({
  position: new Vector3(6.0618767738342285, 51.46142578125, 32.924739837646484),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071067094802856),
  scale: new Vector3(0.11271678656339645, 47.580230712890625, -0.10115407407283783)
})
ringBlueLight31.addComponentOrReplace(transform598)

const cyberpunkDoor2 = new Entity('cyberpunkDoor2')
engine.addEntity(cyberpunkDoor2)
cyberpunkDoor2.setParent(_scene)
const transform599 = new Transform({
  position: new Vector3(29.223628997802734, 32.864662170410156, 63.333255767822266),
  rotation: new Quaternion(3.1755625181566303e-15, -1, 1.1920926823449918e-7, 5.960464477539063e-8),
  scale: new Vector3(1, 1, 1.0082478523254395)
})
cyberpunkDoor2.addComponentOrReplace(transform599)

const wallPlainBlack22 = new Entity('wallPlainBlack22')
engine.addEntity(wallPlainBlack22)
wallPlainBlack22.setParent(_scene)
wallPlainBlack22.addComponentOrReplace(gltfShape49)
const transform600 = new Transform({
  position: new Vector3(37.15449523925781, 32.78547286987305, 63.7153434753418),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.767300128936768, 2.970719575881958, 1.2860572338104248)
})
wallPlainBlack22.addComponentOrReplace(transform600)

const bloomingBlueAcaciaTree2 = new Entity('bloomingBlueAcaciaTree2')
engine.addEntity(bloomingBlueAcaciaTree2)
bloomingBlueAcaciaTree2.setParent(_scene)
const gltfShape54 = new GLTFShape("models/Tree_Forest_Blue_02/Tree_Forest_Blue_02.glb")
gltfShape54.withCollisions = true
gltfShape54.isPointerBlocker = true
gltfShape54.visible = true
bloomingBlueAcaciaTree2.addComponentOrReplace(gltfShape54)
const transform601 = new Transform({
  position: new Vector3(28, 57.98197555541992, 44.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.165311336517334, 1.4173189401626587, 1.2760132551193237)
})
bloomingBlueAcaciaTree2.addComponentOrReplace(transform601)

const bloomingBlueAcaciaTree3 = new Entity('bloomingBlueAcaciaTree3')
engine.addEntity(bloomingBlueAcaciaTree3)
bloomingBlueAcaciaTree3.setParent(_scene)
bloomingBlueAcaciaTree3.addComponentOrReplace(gltfShape54)
const transform602 = new Transform({
  position: new Vector3(23, 58.2733039855957, 28),
  rotation: new Quaternion(0, -0.5555703043937683, 6.622912707143769e-8, 0.8314695954322815),
  scale: new Vector3(1.0356249809265137, 1.0533090829849243, 1.2076377868652344)
})
bloomingBlueAcaciaTree3.addComponentOrReplace(transform602)

const bloomingBlueAcaciaTree4 = new Entity('bloomingBlueAcaciaTree4')
engine.addEntity(bloomingBlueAcaciaTree4)
bloomingBlueAcaciaTree4.setParent(_scene)
bloomingBlueAcaciaTree4.addComponentOrReplace(gltfShape54)
const transform603 = new Transform({
  position: new Vector3(42.5, 57.98197555541992, 29),
  rotation: new Quaternion(-3.2861924326063304e-15, -0.8314695954322815, 9.911889264913043e-8, 0.5555702447891235),
  scale: new Vector3(1.1653097867965698, 1.3548169136047363, 1.136763334274292)
})
bloomingBlueAcaciaTree4.addComponentOrReplace(transform603)

const imageCubeC24 = new Entity('imageCubeC24')
engine.addEntity(imageCubeC24)
imageCubeC24.setParent(_scene)
const transform604 = new Transform({
  position: new Vector3(64, 29.29787254333496, 33.78133010864258),
  rotation: new Quaternion(0.7071068286895752, -0.7071068286895752, 8.429368847373553e-8, -8.429368847373553e-8),
  scale: new Vector3(0.7609987258911133, 17.416152954101562, 24.86507797241211)
})
imageCubeC24.addComponentOrReplace(transform604)

const clickArea21 = new Entity('clickArea21')
engine.addEntity(clickArea21)
clickArea21.setParent(_scene)
const transform605 = new Transform({
  position: new Vector3(25.479400634765625, 1.5, 37.00590133666992),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.929567337036133, 6.4175615310668945, 2.8475136756896973)
})
clickArea21.addComponentOrReplace(transform605)

const invisibleWall25 = new Entity('invisibleWall25')
engine.addEntity(invisibleWall25)
invisibleWall25.setParent(_scene)
const transform606 = new Transform({
  position: new Vector3(25.285890579223633, 0, 37.05038070678711),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.795370101928711, 8, 2.693253517150879)
})
invisibleWall25.addComponentOrReplace(transform606)

const invisibleWall26 = new Entity('invisibleWall26')
engine.addEntity(invisibleWall26)
invisibleWall26.setParent(_scene)
const transform607 = new Transform({
  position: new Vector3(25.285890579223633, 0, 37.05349349975586),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(13.106064796447754, 8, 2.1864726543426514)
})
invisibleWall26.addComponentOrReplace(transform607)

const stairsFireEscape8 = new Entity('stairsFireEscape8')
engine.addEntity(stairsFireEscape8)
stairsFireEscape8.setParent(_scene)
stairsFireEscape8.addComponentOrReplace(gltfShape40)
const transform608 = new Transform({
  position: new Vector3(58.341407775878906, 0, 48.33019256591797),
  rotation: new Quaternion(-7.338475767543814e-15, -0.7071067094802856, 8.42936600520261e-8, 0.7071069478988647),
  scale: new Vector3(1.0000014305114746, 1.4279496669769287, 1.3671586513519287)
})
stairsFireEscape8.addComponentOrReplace(transform608)

const grafittiWallI22 = new Entity('grafittiWallI22')
engine.addEntity(grafittiWallI22)
grafittiWallI22.setParent(_scene)
grafittiWallI22.addComponentOrReplace(gltfShape8)
const transform609 = new Transform({
  position: new Vector3(63.64411163330078, 10.883977890014648, 50.49030685424805),
  rotation: new Quaternion(-0.7071068286895752, 5.960464477539063e-8, -1.234452806642139e-8, 0.7071068286895752),
  scale: new Vector3(1.9952447414398193, 3.5219998359680176, 1.0000125169754028)
})
grafittiWallI22.addComponentOrReplace(transform609)

const grafittiWallI23 = new Entity('grafittiWallI23')
engine.addEntity(grafittiWallI23)
grafittiWallI23.setParent(_scene)
grafittiWallI23.addComponentOrReplace(gltfShape8)
const transform610 = new Transform({
  position: new Vector3(58.5, 5.759403228759766, 50.5),
  rotation: new Quaternion(-0.7071068286895752, 5.960464477539063e-8, -1.234452806642139e-8, 0.7071068286895752),
  scale: new Vector3(0.6556492447853088, 1.0987651348114014, 1.0000077486038208)
})
grafittiWallI23.addComponentOrReplace(transform610)

const grafittiWallShortA2 = new Entity('grafittiWallShortA2')
engine.addEntity(grafittiWallShortA2)
grafittiWallShortA2.setParent(_scene)
grafittiWallShortA2.addComponentOrReplace(gltfShape45)
const transform611 = new Transform({
  position: new Vector3(63.66219711303711, 5.745901584625244, 33.06934356689453),
  rotation: new Quaternion(-0.5, 0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(6.542707443237305, 3.7837343215942383, 0.2895412743091583)
})
grafittiWallShortA2.addComponentOrReplace(transform611)

const grafittiWallShortA4 = new Entity('grafittiWallShortA4')
engine.addEntity(grafittiWallShortA4)
grafittiWallShortA4.setParent(_scene)
grafittiWallShortA4.addComponentOrReplace(gltfShape45)
const transform612 = new Transform({
  position: new Vector3(57.91998291015625, 5.745901584625244, 37.44701385498047),
  rotation: new Quaternion(-1.7457795209452343e-8, -1, 1.0175148190683103e-7, 5.960464477539063e-8),
  scale: new Vector3(3.0020179748535156, 2.523303508758545, 0.2895413637161255)
})
grafittiWallShortA4.addComponentOrReplace(transform612)

const cyberpunkDoor3 = new Entity('cyberpunkDoor3')
engine.addEntity(cyberpunkDoor3)
cyberpunkDoor3.setParent(_scene)
const transform613 = new Transform({
  position: new Vector3(57.989681243896484, 5.6278815269470215, 37.5905647277832),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0429562330245972, 1, 1)
})
cyberpunkDoor3.addComponentOrReplace(transform613)

const ladder6 = new Entity('ladder6')
engine.addEntity(ladder6)
ladder6.setParent(_scene)
ladder6.addComponentOrReplace(gltfShape15)
const transform614 = new Transform({
  position: new Vector3(62.1366081237793, 5.259632110595703, 34.2066650390625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0996038913726807, 2.6413700580596924, 1.5)
})
ladder6.addComponentOrReplace(transform614)

const grafittiWallI24 = new Entity('grafittiWallI24')
engine.addEntity(grafittiWallI24)
grafittiWallI24.setParent(_scene)
grafittiWallI24.addComponentOrReplace(gltfShape8)
const transform615 = new Transform({
  position: new Vector3(60.97643280029297, 10.883977890014648, 36.471412658691406),
  rotation: new Quaternion(-0.7071068286895752, 5.960464477539063e-8, -1.234452806642139e-8, 0.7071068286895752),
  scale: new Vector3(1.3221558332443237, 0.8074873685836792, 1.0000156164169312)
})
grafittiWallI24.addComponentOrReplace(transform615)

const grafittiWallShortA5 = new Entity('grafittiWallShortA5')
engine.addEntity(grafittiWallShortA5)
grafittiWallShortA5.setParent(_scene)
grafittiWallShortA5.addComponentOrReplace(gltfShape45)
const transform616 = new Transform({
  position: new Vector3(55.97419738769531, 9.427635192871094, 37.447757720947266),
  rotation: new Quaternion(-1.7457795209452343e-8, -1, 1.0175148190683103e-7, 5.960464477539063e-8),
  scale: new Vector3(2.7026007175445557, 0.5740054249763489, 0.2895413637161255)
})
grafittiWallShortA5.addComponentOrReplace(transform616)

const scifiChest6 = new Entity('scifiChest6')
engine.addEntity(scifiChest6)
scifiChest6.setParent(_scene)
const transform617 = new Transform({
  position: new Vector3(10, 46.464012145996094, 38.858238220214844),
  rotation: new Quaternion(-4.178898031651293e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1, 1, 1)
})
scifiChest6.addComponentOrReplace(transform617)

const scifiChest7 = new Entity('scifiChest7')
engine.addEntity(scifiChest7)
scifiChest7.setParent(_scene)
const transform618 = new Transform({
  position: new Vector3(24, 43.32097625732422, 55.5),
  rotation: new Quaternion(2.95492737605583e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
scifiChest7.addComponentOrReplace(transform618)

const scifiChest8 = new Entity('scifiChest8')
engine.addEntity(scifiChest8)
scifiChest8.setParent(_scene)
const transform619 = new Transform({
  position: new Vector3(24, 43.32097625732422, 56.5),
  rotation: new Quaternion(2.95492737605583e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
scifiChest8.addComponentOrReplace(transform619)

const scifiChest11 = new Entity('scifiChest11')
engine.addEntity(scifiChest11)
scifiChest11.setParent(_scene)
const transform620 = new Transform({
  position: new Vector3(24, 50.82097625732422, 55.5),
  rotation: new Quaternion(2.95492737605583e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
scifiChest11.addComponentOrReplace(transform620)

const scifiChest13 = new Entity('scifiChest13')
engine.addEntity(scifiChest13)
scifiChest13.setParent(_scene)
const transform621 = new Transform({
  position: new Vector3(24, 50.82097625732422, 57.5),
  rotation: new Quaternion(2.95492737605583e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
scifiChest13.addComponentOrReplace(transform621)

const scifiChest15 = new Entity('scifiChest15')
engine.addEntity(scifiChest15)
scifiChest15.setParent(_scene)
const transform622 = new Transform({
  position: new Vector3(36.5, 43.32097625732422, 58),
  rotation: new Quaternion(-9.009379546109746e-15, 0.7071067690849304, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
scifiChest15.addComponentOrReplace(transform622)

const scifiChest17 = new Entity('scifiChest17')
engine.addEntity(scifiChest17)
scifiChest17.setParent(_scene)
const transform623 = new Transform({
  position: new Vector3(36.5, 43.32097625732422, 56),
  rotation: new Quaternion(-9.009379546109746e-15, 0.7071067690849304, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
scifiChest17.addComponentOrReplace(transform623)

const scifiChest19 = new Entity('scifiChest19')
engine.addEntity(scifiChest19)
scifiChest19.setParent(_scene)
const transform624 = new Transform({
  position: new Vector3(36.5, 50.82097625732422, 57.5),
  rotation: new Quaternion(-9.009379546109746e-15, 0.7071067690849304, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
scifiChest19.addComponentOrReplace(transform624)

const faceAccessCard = new Entity('faceAccessCard')
engine.addEntity(faceAccessCard)
faceAccessCard.setParent(_scene)
const transform625 = new Transform({
  position: new Vector3(57, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
faceAccessCard.addComponentOrReplace(transform625)

const clickArea22 = new Entity('clickArea22')
engine.addEntity(clickArea22)
clickArea22.setParent(_scene)
const transform626 = new Transform({
  position: new Vector3(52.49812316894531, 0, 11.0819673538208),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.75, 2, 9.30088996887207)
})
clickArea22.addComponentOrReplace(transform626)

const invisibleWall27 = new Entity('invisibleWall27')
engine.addEntity(invisibleWall27)
invisibleWall27.setParent(_scene)
const transform627 = new Transform({
  position: new Vector3(11.378870964050293, 7.003847122192383, 46.82298278808594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0091629028320312, 1.0091629028320312, 0.3469955623149872)
})
invisibleWall27.addComponentOrReplace(transform627)

const clickArea23 = new Entity('clickArea23')
engine.addEntity(clickArea23)
clickArea23.setParent(_scene)
const transform628 = new Transform({
  position: new Vector3(11.383686065673828, 7.143096923828125, 46.805301666259766),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
clickArea23.addComponentOrReplace(transform628)

const grafittiWallShortA6 = new Entity('grafittiWallShortA6')
engine.addEntity(grafittiWallShortA6)
grafittiWallShortA6.setParent(_scene)
grafittiWallShortA6.addComponentOrReplace(gltfShape45)
const transform629 = new Transform({
  position: new Vector3(60.8226203918457, 5.745901584625244, 36.30152893066406),
  rotation: new Quaternion(-2.468905435648594e-8, -0.7071067690849304, 8.429368847373553e-8, 0.70710688829422),
  scale: new Vector3(1.5543818473815918, 2.523303508758545, 0.28954190015792847)
})
grafittiWallShortA6.addComponentOrReplace(transform629)

const invisibleWall28 = new Entity('invisibleWall28')
engine.addEntity(invisibleWall28)
invisibleWall28.setParent(_scene)
const transform630 = new Transform({
  position: new Vector3(61.141014099121094, 5.753055572509766, 34.3558235168457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6826362609863281, 4.9384307861328125, 2.0850830078125)
})
invisibleWall28.addComponentOrReplace(transform630)

const invisibleWall29 = new Entity('invisibleWall29')
engine.addEntity(invisibleWall29)
invisibleWall29.setParent(_scene)
const transform631 = new Transform({
  position: new Vector3(62.94647216796875, 5.753055572509766, 34.44117736816406),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6826362609863281, 4.9384307861328125, 2.270887851715088)
})
invisibleWall29.addComponentOrReplace(transform631)

const grafittiWallShortA7 = new Entity('grafittiWallShortA7')
engine.addEntity(grafittiWallShortA7)
grafittiWallShortA7.setParent(_scene)
grafittiWallShortA7.addComponentOrReplace(gltfShape45)
const transform632 = new Transform({
  position: new Vector3(63.53714370727539, 5.745901584625244, 46.17463302612305),
  rotation: new Quaternion(-2.468905435648594e-8, -0.7071067690849304, 8.429368847373553e-8, 0.70710688829422),
  scale: new Vector3(6.246588230133057, 2.523303508758545, 0.28954237699508667)
})
grafittiWallShortA7.addComponentOrReplace(transform632)

const railingStraight29 = new Entity('railingStraight29')
engine.addEntity(railingStraight29)
railingStraight29.setParent(_scene)
railingStraight29.addComponentOrReplace(gltfShape43)
const transform633 = new Transform({
  position: new Vector3(43.5, 6, 45.603851318359375),
  rotation: new Quaternion(3.4171413969112403e-15, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.6992638111114502, 1, 1.0000063180923462)
})
railingStraight29.addComponentOrReplace(transform633)

const buildingDecor20 = new Entity('buildingDecor20')
engine.addEntity(buildingDecor20)
buildingDecor20.setParent(_scene)
buildingDecor20.addComponentOrReplace(gltfShape41)
const transform634 = new Transform({
  position: new Vector3(1, 28.26276969909668, 62.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.7554290294647217, 1.000006914138794, 1)
})
buildingDecor20.addComponentOrReplace(transform634)

const clickArea24 = new Entity('clickArea24')
engine.addEntity(clickArea24)
clickArea24.setParent(_scene)
const transform635 = new Transform({
  position: new Vector3(1.4900109767913818, 0, 53.897037506103516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3, 1)
})
clickArea24.addComponentOrReplace(transform635)

const graffiti14 = new Entity('graffiti14')
engine.addEntity(graffiti14)
graffiti14.setParent(_scene)
graffiti14.addComponentOrReplace(gltfShape48)
const transform636 = new Transform({
  position: new Vector3(1.4960099458694458, 2.22231125831604, 53.392215728759766),
  rotation: new Quaternion(0.11570590734481812, -0.9884355068206787, 0.011396164074540138, 0.09735244512557983),
  scale: new Vector3(0.22065572440624237, 0.18384821712970734, 0.856252908706665)
})
graffiti14.addComponentOrReplace(transform636)

const invisibleWall30 = new Entity('invisibleWall30')
engine.addEntity(invisibleWall30)
invisibleWall30.setParent(_scene)
const transform637 = new Transform({
  position: new Vector3(1.4645764827728271, 0, 53.87977981567383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.342476487159729, 3.263577699661255, 1.3259801864624023)
})
invisibleWall30.addComponentOrReplace(transform637)

const clickArea25 = new Entity('clickArea25')
engine.addEntity(clickArea25)
clickArea25.setParent(_scene)
const transform638 = new Transform({
  position: new Vector3(1.4969367980957031, 0, 53.938175201416016),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5333739519119263, 3.0388712882995605, 1.545548439025879)
})
clickArea25.addComponentOrReplace(transform638)

const plainText12 = new Entity('plainText12')
engine.addEntity(plainText12)
plainText12.setParent(_scene)
const transform639 = new Transform({
  position: new Vector3(1.3491846323013306, 1.665738582611084, 19.987470626831055),
  rotation: new Quaternion(-0.1509065479040146, 0.690816342830658, 0.15090645849704742, 0.690816342830658),
  scale: new Vector3(0.27447864413261414, 0.47449642419815063, 0.9242790341377258)
})
plainText12.addComponentOrReplace(transform639)

const plainText13 = new Entity('plainText13')
engine.addEntity(plainText13)
plainText13.setParent(_scene)
const transform640 = new Transform({
  position: new Vector3(2.2266037464141846, 1.665738582611084, 40.512420654296875),
  rotation: new Quaternion(-0.1509065479040146, 0.690816342830658, 0.15090645849704742, 0.690816342830658),
  scale: new Vector3(0.2744784653186798, 0.47449642419815063, 0.9242790341377258)
})
plainText13.addComponentOrReplace(transform640)

const imageComputerScreen16 = new Entity('imageComputerScreen16')
engine.addEntity(imageComputerScreen16)
imageComputerScreen16.setParent(_scene)
const transform641 = new Transform({
  position: new Vector3(61.047584533691406, 11.805464744567871, 43.138389587402344),
  rotation: new Quaternion(0.0041102212853729725, -0.42567479610443115, 0.008736833930015564, -0.9048247337341309),
  scale: new Vector3(1.393141746520996, 1.000146746635437, 1.0000123977661133)
})
imageComputerScreen16.addComponentOrReplace(transform641)

const imageComputerScreen17 = new Entity('imageComputerScreen17')
engine.addEntity(imageComputerScreen17)
imageComputerScreen17.setParent(_scene)
const transform642 = new Transform({
  position: new Vector3(60.77549743652344, 11.905153274536133, 44.06846237182617),
  rotation: new Quaternion(-0.006827345583587885, 0.7070737481117249, -0.006827430333942175, 0.707073986530304),
  scale: new Vector3(1.3931536674499512, 1.000146746635437, 1.0000165700912476)
})
imageComputerScreen17.addComponentOrReplace(transform642)

const imageComputerScreen18 = new Entity('imageComputerScreen18')
engine.addEntity(imageComputerScreen18)
imageComputerScreen18.setParent(_scene)
const transform643 = new Transform({
  position: new Vector3(61.08127975463867, 11.780329704284668, 44.98992156982422),
  rotation: new Quaternion(-0.00869599636644125, 0.9006005525588989, -0.00419593183323741, 0.4345405697822571),
  scale: new Vector3(1.393146276473999, 1.000146746635437, 1.0000182390213013)
})
imageComputerScreen18.addComponentOrReplace(transform643)

const tieredDesk9 = new Entity('tieredDesk9')
engine.addEntity(tieredDesk9)
tieredDesk9.setParent(_scene)
tieredDesk9.addComponentOrReplace(gltfShape31)
const transform644 = new Transform({
  position: new Vector3(60.518402099609375, 10.885882377624512, 44.06791687011719),
  rotation: new Quaternion(-1.8338432714645053e-14, 0.7071067690849304, -8.429369557916289e-8, 0.70710688829422),
  scale: new Vector3(1.500030517578125, 1, 1.500030517578125)
})
tieredDesk9.addComponentOrReplace(transform644)

const scifiChest21 = new Entity('scifiChest21')
engine.addEntity(scifiChest21)
scifiChest21.setParent(_scene)
const transform645 = new Transform({
  position: new Vector3(61.61807632446289, 10.879478454589844, 49.85437774658203),
  rotation: new Quaternion(-4.178898031651293e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1, 1, 1)
})
scifiChest21.addComponentOrReplace(transform645)

const scifiChest22 = new Entity('scifiChest22')
engine.addEntity(scifiChest22)
scifiChest22.setParent(_scene)
const transform646 = new Transform({
  position: new Vector3(60.775390625, 10.879476547241211, 49.874202728271484),
  rotation: new Quaternion(-4.178898031651293e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(1, 1, 1)
})
scifiChest22.addComponentOrReplace(transform646)

const wallPlainBlack29 = new Entity('wallPlainBlack29')
engine.addEntity(wallPlainBlack29)
wallPlainBlack29.setParent(_scene)
wallPlainBlack29.addComponentOrReplace(gltfShape49)
const transform647 = new Transform({
  position: new Vector3(56.595924377441406, 10.9340181350708, 33.28055191040039),
  rotation: new Quaternion(9.34866028719835e-15, 0.7019995450973511, -8.368488124688156e-8, 0.7121774554252625),
  scale: new Vector3(8.66691780090332, 3.050426721572876, 1.000014305114746)
})
wallPlainBlack29.addComponentOrReplace(transform647)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform648 = new Transform({
  position: new Vector3(47.942447662353516, 24.934249877929688, 6.43612813949585),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.082798957824707, 4.931175231933594, 1.000004768371582)
})
imageFromURL.addComponentOrReplace(transform648)

const wallPlainBlack31 = new Entity('wallPlainBlack31')
engine.addEntity(wallPlainBlack31)
wallPlainBlack31.setParent(_scene)
wallPlainBlack31.addComponentOrReplace(gltfShape49)
const transform649 = new Transform({
  position: new Vector3(63.759361267089844, 30.693737030029297, 47.07966613769531),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.435907363891602, 3.5444788932800293, 1.9085524082183838)
})
wallPlainBlack31.addComponentOrReplace(transform649)

const wallPlainBlack32 = new Entity('wallPlainBlack32')
engine.addEntity(wallPlainBlack32)
wallPlainBlack32.setParent(_scene)
wallPlainBlack32.addComponentOrReplace(gltfShape49)
const transform650 = new Transform({
  position: new Vector3(57.760189056396484, 31.03836441040039, 39.00001525878906),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5289289951324463, 1.4708181619644165, 3.035214424133301)
})
wallPlainBlack32.addComponentOrReplace(transform650)

const invisibleRamp2 = new Entity('invisibleRamp2')
engine.addEntity(invisibleRamp2)
invisibleRamp2.setParent(_scene)
const transform651 = new Transform({
  position: new Vector3(58.11479187011719, 30.67607307434082, 35.032249450683594),
  rotation: new Quaternion(-5.8611905917095326e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(3.7553980350494385, 0.3586459159851074, 1)
})
invisibleRamp2.addComponentOrReplace(transform651)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform652 = new Transform({
  position: new Vector3(1.0386106967926025, 45.050777435302734, 32.938018798828125),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(12.68069839477539, 12.795637130737305, 1.0000121593475342)
})
imageFromURL2.addComponentOrReplace(transform652)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform653 = new Transform({
  position: new Vector3(25.111093521118164, 15.525733947753906, 38.53096389770508),
  rotation: new Quaternion(-3.552713678800501e-15, 9.481884927783693e-22, 7.953982423061518e-15, 1),
  scale: new Vector3(11.334378242492676, 5.921043872833252, 1.0000052452087402)
})
imageFromURL4.addComponentOrReplace(transform653)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform654 = new Transform({
  position: new Vector3(55.31303405761719, 26.887054443359375, 57.11570358276367),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.015312671661377, 4.7300825119018555, 1.0000081062316895)
})
imageFromURL3.addComponentOrReplace(transform654)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform655 = new Transform({
  position: new Vector3(61.311004638671875, 23.377197265625, 46.86375427246094),
  rotation: new Quaternion(-2.6749779047906003e-15, -1, 1.1920928244535389e-7, 3.725290298461914e-8),
  scale: new Vector3(4.998013496398926, 6.019003868103027, 0.9809764623641968)
})
imageFromURL5.addComponentOrReplace(transform655)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform656 = new Transform({
  position: new Vector3(61.31474304199219, 23.377197265625, 37.12202835083008),
  rotation: new Quaternion(-1.4210854715202004e-14, -7.450580596923828e-9, 3.9871534893154426e-15, -1),
  scale: new Vector3(4.998013496398926, 6.019003868103027, 0.9809764623641968)
})
imageFromURL6.addComponentOrReplace(transform656)

const scaryDeadTree = new Entity('scaryDeadTree')
engine.addEntity(scaryDeadTree)
scaryDeadTree.setParent(_scene)
const transform657 = new Transform({
  position: new Vector3(20.8458309173584, 0, 7.01805305480957),
  rotation: new Quaternion(-5.011361165179872e-15, -0.5008937120437622, 5.97111835531905e-8, 0.8655088543891907),
  scale: new Vector3(1.0000003576278687, 1.2714142799377441, 1.0000003576278687)
})
scaryDeadTree.addComponentOrReplace(transform657)
const gltfShape55 = new GLTFShape("models/Tree_Dead_02/Tree_Dead_02.glb")
gltfShape55.withCollisions = true
gltfShape55.isPointerBlocker = true
gltfShape55.visible = true
scaryDeadTree.addComponentOrReplace(gltfShape55)

const scaryDeadTree2 = new Entity('scaryDeadTree2')
engine.addEntity(scaryDeadTree2)
scaryDeadTree2.setParent(_scene)
scaryDeadTree2.addComponentOrReplace(gltfShape55)
const transform658 = new Transform({
  position: new Vector3(9.1393404006958, 0, 37.31488037109375),
  rotation: new Quaternion(-1.0586783592793012e-14, -0.8826808929443359, 1.0522374793708877e-7, -0.4699729084968567),
  scale: new Vector3(2.145383834838867, 3.1266255378723145, 1.967859148979187)
})
scaryDeadTree2.addComponentOrReplace(transform658)

const ornamentalFountain3 = new Entity('ornamentalFountain3')
engine.addEntity(ornamentalFountain3)
ornamentalFountain3.setParent(_scene)
ornamentalFountain3.addComponentOrReplace(gltfShape52)
const transform659 = new Transform({
  position: new Vector3(25.20459747314453, 0, 45.307857513427734),
  rotation: new Quaternion(1.618260680894077e-15, -0.701144278049469, 8.358289704801791e-8, 0.7130194902420044),
  scale: new Vector3(1.5000723600387573, 1.9526796340942383, 1.5000721216201782)
})
ornamentalFountain3.addComponentOrReplace(transform659)

const coffeeHouse8 = new Entity('coffeeHouse8')
engine.addEntity(coffeeHouse8)
coffeeHouse8.setParent(_scene)
coffeeHouse8.addComponentOrReplace(gltfShape11)
const transform660 = new Transform({
  position: new Vector3(3.2032108306884766, 0, 46.16315460205078),
  rotation: new Quaternion(1.6815567001853124e-15, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(0.9480640888214111, 1, 0.806980311870575)
})
coffeeHouse8.addComponentOrReplace(transform660)

const telephonePole = new Entity('telephonePole')
engine.addEntity(telephonePole)
telephonePole.setParent(_scene)
const transform661 = new Transform({
  position: new Vector3(62.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 2.5, 3)
})
telephonePole.addComponentOrReplace(transform661)
const gltfShape56 = new GLTFShape("models/Telephone_Pole_1.glb")
gltfShape56.withCollisions = true
gltfShape56.isPointerBlocker = true
gltfShape56.visible = true
telephonePole.addComponentOrReplace(gltfShape56)

const telephonePole2 = new Entity('telephonePole2')
engine.addEntity(telephonePole2)
telephonePole2.setParent(_scene)
telephonePole2.addComponentOrReplace(gltfShape56)
const transform662 = new Transform({
  position: new Vector3(62.5, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 2.5, 3)
})
telephonePole2.addComponentOrReplace(transform662)

const wallPlainBlack5 = new Entity('wallPlainBlack5')
engine.addEntity(wallPlainBlack5)
wallPlainBlack5.setParent(_scene)
wallPlainBlack5.addComponentOrReplace(gltfShape49)
const transform663 = new Transform({
  position: new Vector3(63.32929611206055, 10.567864418029785, 12.08470344543457),
  rotation: new Quaternion(0.005254318471997976, 0.7110824584960938, 0.005314290057867765, 0.7030689716339111),
  scale: new Vector3(2.370048999786377, -0.01564093679189682, 0.17909494042396545)
})
wallPlainBlack5.addComponentOrReplace(transform663)

const wallPlainBlack30 = new Entity('wallPlainBlack30')
engine.addEntity(wallPlainBlack30)
wallPlainBlack30.setParent(_scene)
wallPlainBlack30.addComponentOrReplace(gltfShape49)
const transform664 = new Transform({
  position: new Vector3(61.979400634765625, 10.567830085754395, 11.187116622924805),
  rotation: new Quaternion(0.0036013552453368902, 0.711093008518219, 0.003642486874014139, 0.703079342842102),
  scale: new Vector3(2.3700501918792725, -0.01564094051718712, 0.17909500002861023)
})
wallPlainBlack30.addComponentOrReplace(transform664)

const wallPlainBlack33 = new Entity('wallPlainBlack33')
engine.addEntity(wallPlainBlack33)
wallPlainBlack33.setParent(_scene)
wallPlainBlack33.addComponentOrReplace(gltfShape49)
const transform665 = new Transform({
  position: new Vector3(61.557289123535156, 10.567830085754395, 10.941971778869629),
  rotation: new Quaternion(0.0036013552453368902, 0.711093008518219, 0.003642486874014139, 0.703079342842102),
  scale: new Vector3(2.370051860809326, -0.015640949830412865, 0.1790951043367386)
})
wallPlainBlack33.addComponentOrReplace(transform665)

const wallPlainBlack34 = new Entity('wallPlainBlack34')
engine.addEntity(wallPlainBlack34)
wallPlainBlack34.setParent(_scene)
wallPlainBlack34.addComponentOrReplace(gltfShape49)
const transform666 = new Transform({
  position: new Vector3(62.28047180175781, 9.135271072387695, 11.999553680419922),
  rotation: new Quaternion(0.009691983461380005, 0.7110348343849182, 0.00980253517627716, 0.7030218243598938),
  scale: new Vector3(2.370054006576538, -0.015640953555703163, 0.17909523844718933)
})
wallPlainBlack34.addComponentOrReplace(transform666)

const wallPlainBlack35 = new Entity('wallPlainBlack35')
engine.addEntity(wallPlainBlack35)
wallPlainBlack35.setParent(_scene)
wallPlainBlack35.addComponentOrReplace(gltfShape49)
const transform667 = new Transform({
  position: new Vector3(62.897308349609375, 9.134840965270996, 10.598615646362305),
  rotation: new Quaternion(0.0036013552453368902, 0.711093008518219, 0.003642486874014139, 0.703079342842102),
  scale: new Vector3(2.37005352973938, -0.015640953555703163, 0.17909520864486694)
})
wallPlainBlack35.addComponentOrReplace(transform667)

const wallPlainBlack36 = new Entity('wallPlainBlack36')
engine.addEntity(wallPlainBlack36)
wallPlainBlack36.setParent(_scene)
wallPlainBlack36.addComponentOrReplace(gltfShape49)
const transform668 = new Transform({
  position: new Vector3(62.260215759277344, 9.13535213470459, 22.966821670532227),
  rotation: new Quaternion(0.009599508717656136, 0.7030245661735535, -0.00949124526232481, -0.7110375761985779),
  scale: new Vector3(2.370056390762329, -0.01564096100628376, 0.17909538745880127)
})
wallPlainBlack36.addComponentOrReplace(transform668)

const wallPlainBlack37 = new Entity('wallPlainBlack37')
engine.addEntity(wallPlainBlack37)
wallPlainBlack37.setParent(_scene)
wallPlainBlack37.addComponentOrReplace(gltfShape49)
const transform669 = new Transform({
  position: new Vector3(62.877052307128906, 9.134840965270996, 21.56589126586914),
  rotation: new Quaternion(0.003642571624368429, 0.703079342842102, -0.0036014390643686056, -0.711093008518219),
  scale: new Vector3(2.3700549602508545, -0.01564095914363861, 0.1790952980518341)
})
wallPlainBlack37.addComponentOrReplace(transform669)

const wallPlainBlack38 = new Entity('wallPlainBlack38')
engine.addEntity(wallPlainBlack38)
wallPlainBlack38.setParent(_scene)
wallPlainBlack38.addComponentOrReplace(gltfShape49)
const transform670 = new Transform({
  position: new Vector3(61.5, 10.567830085754395, 22),
  rotation: new Quaternion(0.003642571624368429, 0.703079342842102, -0.0036014390643686056, -0.711093008518219),
  scale: new Vector3(2.370051622390747, -0.015640955418348312, 0.17909516394138336)
})
wallPlainBlack38.addComponentOrReplace(transform670)

const wallPlainBlack39 = new Entity('wallPlainBlack39')
engine.addEntity(wallPlainBlack39)
wallPlainBlack39.setParent(_scene)
wallPlainBlack39.addComponentOrReplace(gltfShape49)
const transform671 = new Transform({
  position: new Vector3(62, 10.567830085754395, 22.5),
  rotation: new Quaternion(0.003642571624368429, 0.703079342842102, -0.0036014390643686056, -0.711093008518219),
  scale: new Vector3(2.3700530529022217, -0.01564096286892891, 0.17909526824951172)
})
wallPlainBlack39.addComponentOrReplace(transform671)

const wallPlainBlack40 = new Entity('wallPlainBlack40')
engine.addEntity(wallPlainBlack40)
wallPlainBlack40.setParent(_scene)
wallPlainBlack40.addComponentOrReplace(gltfShape49)
const transform672 = new Transform({
  position: new Vector3(63.31940460205078, 10.56782341003418, 22.975528717041016),
  rotation: new Quaternion(0.008006112650036812, 0.703044056892395, -0.007915804162621498, -0.7110572457313538),
  scale: new Vector3(2.370053768157959, -0.01564095914363861, 0.1790953129529953)
})
wallPlainBlack40.addComponentOrReplace(transform672)

const wallPlainBlack41 = new Entity('wallPlainBlack41')
engine.addEntity(wallPlainBlack41)
wallPlainBlack41.setParent(_scene)
wallPlainBlack41.addComponentOrReplace(gltfShape49)
const transform673 = new Transform({
  position: new Vector3(62.81635284423828, 9.091985702514648, 16.999481201171875),
  rotation: new Quaternion(0.0037293178029358387, 0.7202123999595642, -0.0035115345381200314, -0.6937348246574402),
  scale: new Vector3(0.9422166347503662, -0.01563999056816101, 0.1790817379951477)
})
wallPlainBlack41.addComponentOrReplace(transform673)

const wallPlainBlack42 = new Entity('wallPlainBlack42')
engine.addEntity(wallPlainBlack42)
wallPlainBlack42.setParent(_scene)
wallPlainBlack42.addComponentOrReplace(gltfShape49)
const transform674 = new Transform({
  position: new Vector3(62.200103759765625, 8.987297058105469, 18.334470748901367),
  rotation: new Quaternion(0.0037293178029358387, 0.7202123999595642, -0.0035115345381200314, -0.6937348246574402),
  scale: new Vector3(0.9422175884246826, -0.015639998018741608, 0.17908185720443726)
})
wallPlainBlack42.addComponentOrReplace(transform674)

const wallPlainBlack43 = new Entity('wallPlainBlack43')
engine.addEntity(wallPlainBlack43)
wallPlainBlack43.setParent(_scene)
wallPlainBlack43.addComponentOrReplace(gltfShape49)
const transform675 = new Transform({
  position: new Vector3(63.26406478881836, 10.477075576782227, 18.38753318786621),
  rotation: new Quaternion(-0.0011540548875927925, 0.7202193140983582, 0.0015582097694277763, -0.693743884563446),
  scale: new Vector3(0.9422219395637512, -0.015640007331967354, 0.1790826916694641)
})
wallPlainBlack43.addComponentOrReplace(transform675)

const wallPlainBlack44 = new Entity('wallPlainBlack44')
engine.addEntity(wallPlainBlack44)
wallPlainBlack44.setParent(_scene)
wallPlainBlack44.addComponentOrReplace(gltfShape49)
const transform676 = new Transform({
  position: new Vector3(61.947166442871094, 10.523731231689453, 17.809837341308594),
  rotation: new Quaternion(-0.0011419373331591487, 0.7148184180259705, 0.0015671116998419166, -0.6993074417114258),
  scale: new Vector3(1.0143866539001465, -0.01564003899693489, 0.17910225689411163)
})
wallPlainBlack44.addComponentOrReplace(transform676)

const wallPlainBlack45 = new Entity('wallPlainBlack45')
engine.addEntity(wallPlainBlack45)
wallPlainBlack45.setParent(_scene)
wallPlainBlack45.addComponentOrReplace(gltfShape49)
const transform677 = new Transform({
  position: new Vector3(61.42878723144531, 10.508048057556152, 17.286012649536133),
  rotation: new Quaternion(-0.0011800031643360853, 0.7317423224449158, 0.0015386521117761731, -0.6815785765647888),
  scale: new Vector3(0.8902208209037781, -0.01563999615609646, 0.17903786897659302)
})
wallPlainBlack45.addComponentOrReplace(transform677)

const wallPlainBlack46 = new Entity('wallPlainBlack46')
engine.addEntity(wallPlainBlack46)
wallPlainBlack46.setParent(_scene)
wallPlainBlack46.addComponentOrReplace(gltfShape49)
const transform678 = new Transform({
  position: new Vector3(62.82606506347656, 9.134840965270996, 33.046878814697266),
  rotation: new Quaternion(0.003642571624368429, 0.703079342842102, -0.0036014390643686056, -0.711093008518219),
  scale: new Vector3(2.541203498840332, -0.015641093254089355, 0.17909714579582214)
})
wallPlainBlack46.addComponentOrReplace(transform678)

const wallPlainBlack47 = new Entity('wallPlainBlack47')
engine.addEntity(wallPlainBlack47)
wallPlainBlack47.setParent(_scene)
wallPlainBlack47.addComponentOrReplace(gltfShape49)
const transform679 = new Transform({
  position: new Vector3(62.77650451660156, 9.091985702514648, 28.008647918701172),
  rotation: new Quaternion(0.0037147800903767347, 0.7173404693603516, -0.0035269090440124273, -0.6967039704322815),
  scale: new Vector3(0.9422169923782349, -0.015639998018741608, 0.17908181250095367)
})
wallPlainBlack47.addComponentOrReplace(transform679)

const wallPlainBlack48 = new Entity('wallPlainBlack48')
engine.addEntity(wallPlainBlack48)
wallPlainBlack48.setParent(_scene)
wallPlainBlack48.addComponentOrReplace(gltfShape49)
const transform680 = new Transform({
  position: new Vector3(62.83416748046875, 9.134840965270996, 21.548110961914062),
  rotation: new Quaternion(0.0036013552453368902, 0.711093008518219, 0.003642486874014139, 0.703079342842102),
  scale: new Vector3(2.3700544834136963, -0.01564095728099346, 0.17909526824951172)
})
wallPlainBlack48.addComponentOrReplace(transform680)

const wallPlainBlack49 = new Entity('wallPlainBlack49')
engine.addEntity(wallPlainBlack49)
wallPlainBlack49.setParent(_scene)
wallPlainBlack49.addComponentOrReplace(gltfShape49)
const transform681 = new Transform({
  position: new Vector3(62.21733093261719, 9.135271072387695, 22.94904899597168),
  rotation: new Quaternion(0.00969198253005743, 0.7110347747802734, 0.009802534244954586, 0.703021764755249),
  scale: new Vector3(2.3700554370880127, -0.015640953555703163, 0.1790952980518341)
})
wallPlainBlack49.addComponentOrReplace(transform681)

const wallPlainBlack50 = new Entity('wallPlainBlack50')
engine.addEntity(wallPlainBlack50)
wallPlainBlack50.setParent(_scene)
wallPlainBlack50.addComponentOrReplace(gltfShape49)
const transform682 = new Transform({
  position: new Vector3(62.136962890625, 8.987297058105469, 29.283966064453125),
  rotation: new Quaternion(-0.004323919303715229, 0.7202046513557434, 0.004849046003073454, -0.6937313675880432),
  scale: new Vector3(0.8691989779472351, -0.015639878809452057, 0.17906247079372406)
})
wallPlainBlack50.addComponentOrReplace(transform682)

const wallPlainBlack51 = new Entity('wallPlainBlack51')
engine.addEntity(wallPlainBlack51)
wallPlainBlack51.setParent(_scene)
wallPlainBlack51.addComponentOrReplace(gltfShape49)
const transform683 = new Transform({
  position: new Vector3(62.17472457885742, 9.093018531799316, 33.31293869018555),
  rotation: new Quaternion(0.009599508717656136, 0.7030245661735535, -0.00949124526232481, -0.7110375761985779),
  scale: new Vector3(2.0608832836151123, -0.015639474615454674, 0.1790938377380371)
})
wallPlainBlack51.addComponentOrReplace(transform683)

const wallPlainBlack52 = new Entity('wallPlainBlack52')
engine.addEntity(wallPlainBlack52)
wallPlainBlack52.setParent(_scene)
wallPlainBlack52.addComponentOrReplace(gltfShape49)
const transform684 = new Transform({
  position: new Vector3(63.256263732910156, 10.56782341003418, 33.925025939941406),
  rotation: new Quaternion(0.008006112650036812, 0.703044056892395, -0.007915804162621498, -0.7110572457313538),
  scale: new Vector3(2.370054244995117, -0.01564095914363861, 0.17909543216228485)
})
wallPlainBlack52.addComponentOrReplace(transform684)

const wallPlainBlack53 = new Entity('wallPlainBlack53')
engine.addEntity(wallPlainBlack53)
wallPlainBlack53.setParent(_scene)
wallPlainBlack53.addComponentOrReplace(gltfShape49)
const transform685 = new Transform({
  position: new Vector3(63.200923919677734, 10.477075576782227, 29.33702850341797),
  rotation: new Quaternion(-0.0011540548875927925, 0.7202193140983582, 0.0015582097694277763, -0.693743884563446),
  scale: new Vector3(0.9422226548194885, -0.015640007331967354, 0.17908281087875366)
})
wallPlainBlack53.addComponentOrReplace(transform685)

const wallPlainBlack54 = new Entity('wallPlainBlack54')
engine.addEntity(wallPlainBlack54)
wallPlainBlack54.setParent(_scene)
wallPlainBlack54.addComponentOrReplace(gltfShape49)
const transform686 = new Transform({
  position: new Vector3(63.26615524291992, 10.567864418029785, 23.034198760986328),
  rotation: new Quaternion(0.005254318471997976, 0.7110824584960938, 0.005314290057867765, 0.7030689716339111),
  scale: new Vector3(2.370049476623535, -0.01564093679189682, 0.17909500002861023)
})
wallPlainBlack54.addComponentOrReplace(transform686)

const wallPlainBlack55 = new Entity('wallPlainBlack55')
engine.addEntity(wallPlainBlack55)
wallPlainBlack55.setParent(_scene)
wallPlainBlack55.addComponentOrReplace(gltfShape49)
const transform687 = new Transform({
  position: new Vector3(61.49414825439453, 10.567830085754395, 21.89146614074707),
  rotation: new Quaternion(0.0036013552453368902, 0.711093008518219, 0.003642486874014139, 0.703079342842102),
  scale: new Vector3(2.3700528144836426, -0.015640953555703163, 0.17909516394138336)
})
wallPlainBlack55.addComponentOrReplace(transform687)

const wallPlainBlack56 = new Entity('wallPlainBlack56')
engine.addEntity(wallPlainBlack56)
wallPlainBlack56.setParent(_scene)
wallPlainBlack56.addComponentOrReplace(gltfShape49)
const transform688 = new Transform({
  position: new Vector3(61.916259765625, 10.567830085754395, 22.136611938476562),
  rotation: new Quaternion(0.0036013552453368902, 0.711093008518219, 0.003642486874014139, 0.703079342842102),
  scale: new Vector3(2.370051145553589, -0.015640944242477417, 0.179095059633255)
})
wallPlainBlack56.addComponentOrReplace(transform688)

const wallPlainBlack57 = new Entity('wallPlainBlack57')
engine.addEntity(wallPlainBlack57)
wallPlainBlack57.setParent(_scene)
wallPlainBlack57.addComponentOrReplace(gltfShape49)
const transform689 = new Transform({
  position: new Vector3(61.88402557373047, 10.523731231689453, 28.75933265686035),
  rotation: new Quaternion(-0.0011419373331591487, 0.7148184180259705, 0.0015671116998419166, -0.6993074417114258),
  scale: new Vector3(1.0143866539001465, -0.01564004272222519, 0.17910225689411163)
})
wallPlainBlack57.addComponentOrReplace(transform689)

const wallPlainBlack58 = new Entity('wallPlainBlack58')
engine.addEntity(wallPlainBlack58)
wallPlainBlack58.setParent(_scene)
wallPlainBlack58.addComponentOrReplace(gltfShape49)
const transform690 = new Transform({
  position: new Vector3(61.36564636230469, 10.508048057556152, 28.23550796508789),
  rotation: new Quaternion(-0.0011800032807514071, 0.7317423820495605, 0.001538652228191495, -0.6815786361694336),
  scale: new Vector3(0.8902212977409363, -0.01563999615609646, 0.17903800308704376)
})
wallPlainBlack58.addComponentOrReplace(transform690)

const wallPlainBlack59 = new Entity('wallPlainBlack59')
engine.addEntity(wallPlainBlack59)
wallPlainBlack59.setParent(_scene)
wallPlainBlack59.addComponentOrReplace(gltfShape49)
const transform691 = new Transform({
  position: new Vector3(61.436859130859375, 10.567830085754395, 32.949493408203125),
  rotation: new Quaternion(0.003642571624368429, 0.703079342842102, -0.0036014390643686056, -0.711093008518219),
  scale: new Vector3(2.3700525760650635, -0.01564095914363861, 0.17909522354602814)
})
wallPlainBlack59.addComponentOrReplace(transform691)

const wallPlainBlack60 = new Entity('wallPlainBlack60')
engine.addEntity(wallPlainBlack60)
wallPlainBlack60.setParent(_scene)
wallPlainBlack60.addComponentOrReplace(gltfShape49)
const transform692 = new Transform({
  position: new Vector3(61.93394470214844, 10.567830085754395, 33.2909049987793),
  rotation: new Quaternion(0.003642571624368429, 0.703079342842102, -0.0036014390643686056, -0.711093008518219),
  scale: new Vector3(2.304857015609741, -0.01564093679189682, 0.17909486591815948)
})
wallPlainBlack60.addComponentOrReplace(transform692)

const telephonePole4 = new Entity('telephonePole4')
engine.addEntity(telephonePole4)
telephonePole4.setParent(_scene)
telephonePole4.addComponentOrReplace(gltfShape56)
const transform693 = new Transform({
  position: new Vector3(46.69416809082031, 0.0000019073486328125, 1.4758708477020264),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.000007390975952, 2.5, 3.000007390975952)
})
telephonePole4.addComponentOrReplace(transform693)

const wallPlainBlack62 = new Entity('wallPlainBlack62')
engine.addEntity(wallPlainBlack62)
wallPlainBlack62.setParent(_scene)
wallPlainBlack62.addComponentOrReplace(gltfShape49)
const transform694 = new Transform({
  position: new Vector3(46.16565704345703, 10.69921875, 2.368058919906616),
  rotation: new Quaternion(0, 0, 0.27864694595336914, 0.9603936672210693),
  scale: new Vector3(3.201453685760498, -0.013487454503774643, 0.12862226366996765)
})
wallPlainBlack62.addComponentOrReplace(transform694)

const wallPlainBlack63 = new Entity('wallPlainBlack63')
engine.addEntity(wallPlainBlack63)
wallPlainBlack63.setParent(_scene)
wallPlainBlack63.addComponentOrReplace(gltfShape49)
const transform695 = new Transform({
  position: new Vector3(46.416831970214844, 10.660801887512207, 1.8687770366668701),
  rotation: new Quaternion(0, 0, 0.27864694595336914, 0.9603936672210693),
  scale: new Vector3(3.201453685760498, -0.013487454503774643, 0.12862226366996765)
})
wallPlainBlack63.addComponentOrReplace(transform695)

const wallPlainBlack64 = new Entity('wallPlainBlack64')
engine.addEntity(wallPlainBlack64)
wallPlainBlack64.setParent(_scene)
wallPlainBlack64.addComponentOrReplace(gltfShape49)
const transform696 = new Transform({
  position: new Vector3(46.868309020996094, 10.660801887512207, 0.9988573789596558),
  rotation: new Quaternion(0.020299620926380157, 0.06996533274650574, 0.27790653705596924, 0.9578417539596558),
  scale: new Vector3(3.2014546394348145, -0.01348746009171009, 0.12862248718738556)
})
wallPlainBlack64.addComponentOrReplace(transform696)

const wallPlainBlack61 = new Entity('wallPlainBlack61')
engine.addEntity(wallPlainBlack61)
wallPlainBlack61.setParent(_scene)
wallPlainBlack61.addComponentOrReplace(gltfShape49)
const transform697 = new Transform({
  position: new Vector3(45.806236267089844, 9.145052909851074, 1.049696445465088),
  rotation: new Quaternion(0.030060600489377975, 0.1255858838558197, 0.23083797097206116, 0.9643849730491638),
  scale: new Vector3(2.2043423652648926, 0.01938900724053383, 0.22569771111011505)
})
wallPlainBlack61.addComponentOrReplace(transform697)

const wallPlainBlack65 = new Entity('wallPlainBlack65')
engine.addEntity(wallPlainBlack65)
wallPlainBlack65.setParent(_scene)
wallPlainBlack65.addComponentOrReplace(gltfShape49)
const transform698 = new Transform({
  position: new Vector3(49.071998596191406, 10.552297592163086, 0.9505757689476013),
  rotation: new Quaternion(-2.7749686089667536e-17, -0.08334235846996307, 9.935182454512415e-9, 0.9965210556983948),
  scale: new Vector3(1.000000238418579, 0.012048366479575634, -0.15883000195026398)
})
wallPlainBlack65.addComponentOrReplace(transform698)

const wallPlainBlack66 = new Entity('wallPlainBlack66')
engine.addEntity(wallPlainBlack66)
wallPlainBlack66.setParent(_scene)
wallPlainBlack66.addComponentOrReplace(gltfShape49)
const transform699 = new Transform({
  position: new Vector3(48.86030578613281, 10.552297592163086, 1.3639254570007324),
  rotation: new Quaternion(-2.7749686089667536e-17, -0.08334235846996307, 9.935182454512415e-9, 0.9965210556983948),
  scale: new Vector3(1.0000003576278687, 0.012048366479575634, -0.15883001685142517)
})
wallPlainBlack66.addComponentOrReplace(transform699)

const wallPlainBlack68 = new Entity('wallPlainBlack68')
engine.addEntity(wallPlainBlack68)
wallPlainBlack68.setParent(_scene)
wallPlainBlack68.addComponentOrReplace(gltfShape49)
const transform700 = new Transform({
  position: new Vector3(49.827274322509766, 11.960253715515137, 1.17973792552948),
  rotation: new Quaternion(-2.7749686089667536e-17, -0.08334235846996307, 9.935182454512415e-9, 0.9965210556983948),
  scale: new Vector3(1.8319658041000366, 0.012048366479575634, -0.16257938742637634)
})
wallPlainBlack68.addComponentOrReplace(transform700)

const wallPlainBlack67 = new Entity('wallPlainBlack67')
engine.addEntity(wallPlainBlack67)
wallPlainBlack67.setParent(_scene)
wallPlainBlack67.addComponentOrReplace(gltfShape49)
const transform701 = new Transform({
  position: new Vector3(49.99350357055664, 11.960253715515137, 1.6523491144180298),
  rotation: new Quaternion(-2.7749686089667536e-17, -0.08334235846996307, 9.935182454512415e-9, 0.9965210556983948),
  scale: new Vector3(1.8319659233093262, 0.012048366479575634, -0.16257938742637634)
})
wallPlainBlack67.addComponentOrReplace(transform701)

const ambientSound8 = new Entity('ambientSound8')
engine.addEntity(ambientSound8)
ambientSound8.setParent(_scene)
const transform702 = new Transform({
  position: new Vector3(28.5, 59, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9, 8.75, 14.999998092651367)
})
ambientSound8.addComponentOrReplace(transform702)

const floorGlass9 = new Entity('floorGlass9')
engine.addEntity(floorGlass9)
floorGlass9.setParent(_scene)
floorGlass9.addComponentOrReplace(gltfShape53)
const transform703 = new Transform({
  position: new Vector3(20.02195930480957, 57.799407958984375, 35.956703186035156),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9441126585006714, 9.509791374206543, 1.4065940380096436)
})
floorGlass9.addComponentOrReplace(transform703)

const ropeLight12 = new Entity('ropeLight12')
engine.addEntity(ropeLight12)
ropeLight12.setParent(_scene)
const transform704 = new Transform({
  position: new Vector3(16.131555557250977, 57.95087432861328, 35.90392303466797),
  rotation: new Quaternion(0.3370562195777893, -2.9802322387695312e-8, 1.1413360034850939e-8, 0.9414845705032349),
  scale: new Vector3(0.6872931122779846, 1.277922511100769, 1.1874473094940186)
})
ropeLight12.addComponentOrReplace(transform704)

const ropeLight15 = new Entity('ropeLight15')
engine.addEntity(ropeLight15)
ropeLight15.setParent(_scene)
const transform705 = new Transform({
  position: new Vector3(16.131555557250977, 57.95087432861328, 30.267061233520508),
  rotation: new Quaternion(0.3370562195777893, -2.9802322387695312e-8, 1.1413360034850939e-8, 0.9414845705032349),
  scale: new Vector3(0.6872931122779846, 1.277922511100769, 1.1874473094940186)
})
ropeLight15.addComponentOrReplace(transform705)

const wallPlainBlack69 = new Entity('wallPlainBlack69')
engine.addEntity(wallPlainBlack69)
wallPlainBlack69.setParent(_scene)
wallPlainBlack69.addComponentOrReplace(gltfShape49)
const transform706 = new Transform({
  position: new Vector3(12.195734024047852, 57.786705017089844, 39.5),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5.902348518371582, 3.227311372756958, 1.6769367456436157)
})
wallPlainBlack69.addComponentOrReplace(transform706)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform707 = new Transform({
  position: new Vector3(56.498321533203125, 14.694053649902344, 43.02375030517578),
  rotation: new Quaternion(1.4674126891966771e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(6.433410167694092, 3.903494358062744, 1.0000083446502686)
})
imageFromURL7.addComponentOrReplace(transform707)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform708 = new Transform({
  position: new Vector3(56.498321533203125, 17.812013626098633, 47.207725524902344),
  rotation: new Quaternion(1.4674126891966771e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.6777459383010864, 1.3889964818954468, 1.0000100135803223)
})
imageFromURL8.addComponentOrReplace(transform708)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform709 = new Transform({
  position: new Vector3(56.481048583984375, 13.044471740722656, 47.21683883666992),
  rotation: new Quaternion(1.4674126891966771e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.6777467727661133, 1.3889964818954468, 1.0000102519989014)
})
imageFromURL9.addComponentOrReplace(transform709)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform710 = new Transform({
  position: new Vector3(56.52317810058594, 13.044471740722656, 38.88178253173828),
  rotation: new Quaternion(1.4674126891966771e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.6777483224868774, 1.3889964818954468, 1.0000109672546387)
})
imageFromURL10.addComponentOrReplace(transform710)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform711 = new Transform({
  position: new Vector3(56.56061935424805, 18.20104217529297, 37.96645736694336),
  rotation: new Quaternion(1.4674126891966771e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.6777487993240356, 1.3889964818954468, 1.0000112056732178)
})
imageFromURL11.addComponentOrReplace(transform711)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform712 = new Transform({
  position: new Vector3(56.498321533203125, 15.267989158630371, 47.128021240234375),
  rotation: new Quaternion(1.4674126891966771e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.6777464151382446, 1.3889964818954468, 1.0000102519989014)
})
imageFromURL12.addComponentOrReplace(transform712)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform713 = new Transform({
  position: new Vector3(26.06251335144043, 51.638126373291016, 52.48039627075195),
  rotation: new Quaternion(-5.063590487256993e-15, 0, 3.0794535012799475e-15, -1),
  scale: new Vector3(1.6777478456497192, 1.3889964818954468, 1.0000109672546387)
})
imageFromURL13.addComponentOrReplace(transform713)

const imageFromURL14 = new Entity('imageFromURL14')
engine.addEntity(imageFromURL14)
imageFromURL14.setParent(_scene)
const transform714 = new Transform({
  position: new Vector3(25.98280906677246, 54.367496490478516, 52.48039627075195),
  rotation: new Quaternion(-5.063590487256993e-15, 0, 3.0794535012799475e-15, -1),
  scale: new Vector3(1.677747368812561, 1.3889964818954468, 1.0000107288360596)
})
imageFromURL14.addComponentOrReplace(transform714)

const imageFromURL15 = new Entity('imageFromURL15')
engine.addEntity(imageFromURL15)
imageFromURL15.setParent(_scene)
const transform715 = new Transform({
  position: new Vector3(30.166784286499023, 51.757469177246094, 52.48040008544922),
  rotation: new Quaternion(-5.063590487256993e-15, 0, 3.0794535012799475e-15, -1),
  scale: new Vector3(6.43341588973999, 3.903494358062744, 1.0000090599060059)
})
imageFromURL15.addComponentOrReplace(transform715)

const imageFromURL16 = new Entity('imageFromURL16')
engine.addEntity(imageFromURL16)
imageFromURL16.setParent(_scene)
const transform716 = new Transform({
  position: new Vector3(34.443931579589844, 51.08629608154297, 52.50525665283203),
  rotation: new Quaternion(-5.063590487256993e-15, 0, 3.0794535012799475e-15, -1),
  scale: new Vector3(1.677749752998352, 1.3889964818954468, 1.000011682510376)
})
imageFromURL16.addComponentOrReplace(transform716)

const imageFromURL18 = new Entity('imageFromURL18')
engine.addEntity(imageFromURL18)
imageFromURL18.setParent(_scene)
const transform717 = new Transform({
  position: new Vector3(34.73225402832031, 53.89019775390625, 52.54269790649414),
  rotation: new Quaternion(-5.063590487256993e-15, 0, 3.0794535012799475e-15, -1),
  scale: new Vector3(1.6777502298355103, 1.3889964818954468, 1.000011920928955)
})
imageFromURL18.addComponentOrReplace(transform717)

const zebraCrossing7 = new Entity('zebraCrossing7')
engine.addEntity(zebraCrossing7)
zebraCrossing7.setParent(_scene)
zebraCrossing7.addComponentOrReplace(gltfShape21)
const transform718 = new Transform({
  position: new Vector3(46.239925384521484, 0, 59.989131927490234),
  rotation: new Quaternion(5.604824635278231e-15, -1, 1.1920928955078125e-7, 1.4901161193847656e-7),
  scale: new Vector3(0.4344548285007477, 1, 0.500237762928009)
})
zebraCrossing7.addComponentOrReplace(transform718)

const padlock = new Entity('padlock')
engine.addEntity(padlock)
padlock.setParent(_scene)
const transform719 = new Transform({
  position: new Vector3(58.282745361328125, 7.372262954711914, 37.602203369140625),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
padlock.addComponentOrReplace(transform719)

const invisibleWall4 = new Entity('invisibleWall4')
engine.addEntity(invisibleWall4)
invisibleWall4.setParent(_scene)
const transform720 = new Transform({
  position: new Vector3(56.95486831665039, 5.727296352386475, 37.73593521118164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9789413213729858, 3.9294121265411377, 0.3392206132411957)
})
invisibleWall4.addComponentOrReplace(transform720)

const clickArea26 = new Entity('clickArea26')
engine.addEntity(clickArea26)
clickArea26.setParent(_scene)
const transform721 = new Transform({
  position: new Vector3(57.20286178588867, 6, 38.018638610839844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9476587772369385, 3, 0.5323036909103394)
})
clickArea26.addComponentOrReplace(transform721)

const triggerArea5 = new Entity('triggerArea5')
engine.addEntity(triggerArea5)
triggerArea5.setParent(_scene)
const transform722 = new Transform({
  position: new Vector3(60.14765548706055, 10.957964897155762, 37.915382385253906),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.523508548736572, 1.3896234035491943, 1)
})
triggerArea5.addComponentOrReplace(transform722)

const triggerArea6 = new Entity('triggerArea6')
engine.addEntity(triggerArea6)
triggerArea6.setParent(_scene)
const transform723 = new Transform({
  position: new Vector3(62.2208366394043, 6.443702220916748, 35.696773529052734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0754585266113281, 1.1935256719589233, 1)
})
triggerArea6.addComponentOrReplace(transform723)

const fingerprintAccessC = new Entity('fingerprintAccessC')
engine.addEntity(fingerprintAccessC)
fingerprintAccessC.setParent(_scene)
const transform724 = new Transform({
  position: new Vector3(61.643924713134766, 11.837909698486328, 49.809688568115234),
  rotation: new Quaternion(4.016273635009098e-15, 1, -1.1920928244535389e-7, 5.960464477539063e-8),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
fingerprintAccessC.addComponentOrReplace(transform724)

const invisibleWall31 = new Entity('invisibleWall31')
engine.addEntity(invisibleWall31)
invisibleWall31.setParent(_scene)
const transform725 = new Transform({
  position: new Vector3(30.22541618347168, 32.65891647338867, 63.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.1639914512634277, 4.553948879241943, 1)
})
invisibleWall31.addComponentOrReplace(transform725)

const keyboard2 = new Entity('keyboard2')
engine.addEntity(keyboard2)
keyboard2.setParent(_scene)
const transform726 = new Transform({
  position: new Vector3(29.95697593688965, 44.287376403808594, 56.429771423339844),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
keyboard2.addComponentOrReplace(transform726)

const keyboard3 = new Entity('keyboard3')
engine.addEntity(keyboard3)
keyboard3.setParent(_scene)
const transform727 = new Transform({
  position: new Vector3(29.954208374023438, 51.75672912597656, 56.97819519042969),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
keyboard3.addComponentOrReplace(transform727)

const scoreboard2 = new Entity('scoreboard2')
engine.addEntity(scoreboard2)
scoreboard2.setParent(_scene)
const transform728 = new Transform({
  position: new Vector3(59, 11.544906616210938, 50),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -4.470348358154297e-8),
  scale: new Vector3(0.9999997019767761, 1, 0.9999997019767761)
})
scoreboard2.addComponentOrReplace(transform728)

const clickArea27 = new Entity('clickArea27')
engine.addEntity(clickArea27)
clickArea27.setParent(_scene)
const transform729 = new Transform({
  position: new Vector3(30, 44.20606231689453, 55),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 0.25256097316741943, 1)
})
clickArea27.addComponentOrReplace(transform729)

const keyboard4 = new Entity('keyboard4')
engine.addEntity(keyboard4)
keyboard4.setParent(_scene)
const transform730 = new Transform({
  position: new Vector3(8.759623527526855, 47.367610931396484, 33),
  rotation: new Quaternion(-2.8378267651638176e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
keyboard4.addComponentOrReplace(transform730)

const clickArea28 = new Entity('clickArea28')
engine.addEntity(clickArea28)
clickArea28.setParent(_scene)
const transform731 = new Transform({
  position: new Vector3(59.032928466796875, 11.5, 50.302001953125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
clickArea28.addComponentOrReplace(transform731)

const clickArea29 = new Entity('clickArea29')
engine.addEntity(clickArea29)
clickArea29.setParent(_scene)
const transform732 = new Transform({
  position: new Vector3(60.88759231567383, 12, 43.792213439941406),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
clickArea29.addComponentOrReplace(transform732)

const keyboard5 = new Entity('keyboard5')
engine.addEntity(keyboard5)
keyboard5.setParent(_scene)
const transform733 = new Transform({
  position: new Vector3(61.51449203491211, 12, 43.776451110839844),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
keyboard5.addComponentOrReplace(transform733)

const plainText15 = new Entity('plainText15')
engine.addEntity(plainText15)
plainText15.setParent(_scene)
const transform734 = new Transform({
  position: new Vector3(1.2920681238174438, 1.665738582611084, 19.987470626831055),
  rotation: new Quaternion(-0.1509065479040146, 0.690816342830658, 0.15090645849704742, 0.690816342830658),
  scale: new Vector3(0.27447834610939026, 0.47449642419815063, 0.9242790341377258)
})
plainText15.addComponentOrReplace(transform734)

const floorGlass10 = new Entity('floorGlass10')
engine.addEntity(floorGlass10)
floorGlass10.setParent(_scene)
floorGlass10.addComponentOrReplace(gltfShape53)
const transform735 = new Transform({
  position: new Vector3(37.17405700683594, 43.007598876953125, 63.50156784057617),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.3044469356536865, 9.509791374206543, 0.7450283765792847)
})
floorGlass10.addComponentOrReplace(transform735)

const floorGlass11 = new Entity('floorGlass11')
engine.addEntity(floorGlass11)
floorGlass11.setParent(_scene)
floorGlass11.addComponentOrReplace(gltfShape53)
const transform736 = new Transform({
  position: new Vector3(28.466114044189453, 43.007598876953125, 63.50156784057617),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2623459100723267, 9.509791374206543, 0.7450283765792847)
})
floorGlass11.addComponentOrReplace(transform736)

const pixelCritterF3 = new Entity('pixelCritterF3')
engine.addEntity(pixelCritterF3)
pixelCritterF3.setParent(_scene)
pixelCritterF3.addComponentOrReplace(gltfShape16)
const transform737 = new Transform({
  position: new Vector3(31.900094985961914, 2.821624755859375, 57.382633209228516),
  rotation: new Quaternion(0.1714937388896942, 0.669548511505127, 0.13409556448459625, 0.7101500034332275),
  scale: new Vector3(0.8721628189086914, 0.9844617247581482, 1.04227876663208)
})
pixelCritterF3.addComponentOrReplace(transform737)

const coffeeHouse10 = new Entity('coffeeHouse10')
engine.addEntity(coffeeHouse10)
coffeeHouse10.setParent(_scene)
coffeeHouse10.addComponentOrReplace(gltfShape11)
const transform738 = new Transform({
  position: new Vector3(62.1526985168457, 5.6919450759887695, 43.561180114746094),
  rotation: new Quaternion(-1.2245855168118748e-14, -0.7071067094802856, 8.429366715745346e-8, 0.7071069478988647),
  scale: new Vector3(1.000002384185791, 1, 0.5019211173057556)
})
coffeeHouse10.addComponentOrReplace(transform738)

const coffeeHouse9 = new Entity('coffeeHouse9')
engine.addEntity(coffeeHouse9)
coffeeHouse9.setParent(_scene)
coffeeHouse9.addComponentOrReplace(gltfShape11)
const transform739 = new Transform({
  position: new Vector3(57.900150299072266, 5.6919450759887695, 41.38098907470703),
  rotation: new Quaternion(2.1870070519651973e-14, -2.0861622829215776e-7, 8.193957868446976e-15, -1),
  scale: new Vector3(0.7084667682647705, 1, 0.6043117046356201)
})
coffeeHouse9.addComponentOrReplace(transform739)

const grafittiWallJ4 = new Entity('grafittiWallJ4')
engine.addEntity(grafittiWallJ4)
grafittiWallJ4.setParent(_scene)
grafittiWallJ4.addComponentOrReplace(gltfShape7)
const transform740 = new Transform({
  position: new Vector3(33.96442413330078, 0.0062961578369140625, 23.061981201171875),
  rotation: new Quaternion(-0.7071068286895752, 8.940696716308594e-8, -1.234452806642139e-8, -0.7071068286895752),
  scale: new Vector3(4.372968673706055, 2.968918561935425, 0.04404079541563988)
})
grafittiWallJ4.addComponentOrReplace(transform740)

const imageComputerScreen19 = new Entity('imageComputerScreen19')
engine.addEntity(imageComputerScreen19)
imageComputerScreen19.setParent(_scene)
const transform741 = new Transform({
  position: new Vector3(19.971647262573242, 0, 22.490066528320312),
  rotation: new Quaternion(0.009655325673520565, -0.9999533891677856, 1.199258718997953e-7, -7.450233141526041e-8),
  scale: new Vector3(2.880678176879883, 3.4547712802886963, 1.0000038146972656)
})
imageComputerScreen19.addComponentOrReplace(transform741)

const wallPlainBlack70 = new Entity('wallPlainBlack70')
engine.addEntity(wallPlainBlack70)
wallPlainBlack70.setParent(_scene)
wallPlainBlack70.addComponentOrReplace(gltfShape49)
const transform742 = new Transform({
  position: new Vector3(18.947391510009766, 0.8859484195709229, 22.68651008605957),
  rotation: new Quaternion(-2.842872625133906e-14, 0.0010690540075302124, -1.2744738597803007e-10, -0.999999463558197),
  scale: new Vector3(-0.9851710796356201, 0.4489307403564453, 0.5761687755584717)
})
wallPlainBlack70.addComponentOrReplace(transform742)

const imageFromURL17 = new Entity('imageFromURL17')
engine.addEntity(imageFromURL17)
imageFromURL17.setParent(_scene)
const transform743 = new Transform({
  position: new Vector3(19.95590591430664, 0.993950605392456, 22.691421508789062),
  rotation: new Quaternion(-7.105427357601002e-15, 7.450580596923828e-8, -1.066653597994174e-14, -1),
  scale: new Vector3(1.7343149185180664, 1.6308515071868896, 1)
})
imageFromURL17.addComponentOrReplace(transform743)

const imageComputerScreen20 = new Entity('imageComputerScreen20')
engine.addEntity(imageComputerScreen20)
imageComputerScreen20.setParent(_scene)
const transform744 = new Transform({
  position: new Vector3(20.25408172607422, 0, 51.91032409667969),
  rotation: new Quaternion(1.4665378633704762e-10, -1.6051471263267558e-8, -0.009655325673520565, 0.9999533891677856),
  scale: new Vector3(2.880678176879883, 3.4547712802886963, 1.0000038146972656)
})
imageComputerScreen20.addComponentOrReplace(transform744)

const imageFromURL19 = new Entity('imageFromURL19')
engine.addEntity(imageFromURL19)
imageFromURL19.setParent(_scene)
const transform745 = new Transform({
  position: new Vector3(20.26982307434082, 0.993950605392456, 51.70896911621094),
  rotation: new Quaternion(4.778957770826394e-15, -1, 1.1920928244535389e-7, -1.4901161193847656e-8),
  scale: new Vector3(1.7343149185180664, 1.6308515071868896, 1)
})
imageFromURL19.addComponentOrReplace(transform745)

const wallPlainBlack71 = new Entity('wallPlainBlack71')
engine.addEntity(wallPlainBlack71)
wallPlainBlack71.setParent(_scene)
wallPlainBlack71.addComponentOrReplace(gltfShape49)
const transform746 = new Transform({
  position: new Vector3(21.278337478637695, 0.8859484195709229, 51.71321487426758),
  rotation: new Quaternion(3.3806270771045283e-16, -0.999999463558197, 1.1920923981278975e-7, -0.001068994402885437),
  scale: new Vector3(-0.9851732850074768, 0.4489307403564453, 0.5795747637748718)
})
wallPlainBlack71.addComponentOrReplace(transform746)

const wallPlainBlack72 = new Entity('wallPlainBlack72')
engine.addEntity(wallPlainBlack72)
wallPlainBlack72.setParent(_scene)
wallPlainBlack72.addComponentOrReplace(gltfShape49)
const transform747 = new Transform({
  position: new Vector3(10, 5.77821159362793, 56.006195068359375),
  rotation: new Quaternion(8.682622187146296e-15, 0.7078622579574585, -8.43837710817752e-8, 0.7063505053520203),
  scale: new Vector3(1.217229962348938, 1.6399929523468018, 0.7556580901145935)
})
wallPlainBlack72.addComponentOrReplace(transform747)

const wallPlainBlack73 = new Entity('wallPlainBlack73')
engine.addEntity(wallPlainBlack73)
wallPlainBlack73.setParent(_scene)
wallPlainBlack73.addComponentOrReplace(gltfShape49)
const transform748 = new Transform({
  position: new Vector3(10, 5.77821159362793, 60.45635223388672),
  rotation: new Quaternion(8.682622187146296e-15, 0.7078622579574585, -8.43837710817752e-8, 0.7063505053520203),
  scale: new Vector3(1.2172300815582275, 1.6399929523468018, 0.7556580901145935)
})
wallPlainBlack73.addComponentOrReplace(transform748)

const wallPlainBlack74 = new Entity('wallPlainBlack74')
engine.addEntity(wallPlainBlack74)
wallPlainBlack74.setParent(_scene)
wallPlainBlack74.addComponentOrReplace(gltfShape49)
const transform749 = new Transform({
  position: new Vector3(10, 9.450526237487793, 57.08797073364258),
  rotation: new Quaternion(8.682622187146296e-15, 0.7078622579574585, -8.43837710817752e-8, 0.7063505053520203),
  scale: new Vector3(2.3752329349517822, 0.7168139815330505, 0.7556613683700562)
})
wallPlainBlack74.addComponentOrReplace(transform749)

const explore4 = new Entity('explore4')
engine.addEntity(explore4)
explore4.setParent(_scene)
explore4.addComponentOrReplace(gltfShape32)
const transform750 = new Transform({
  position: new Vector3(9.61922550201416, 8.303574562072754, 60.87110900878906),
  rotation: new Quaternion(-0.07814428955316544, -0.7513489127159119, -0.06778500229120255, -0.6517464518547058),
  scale: new Vector3(1.0000004768371582, 1, 1.0000009536743164)
})
explore4.addComponentOrReplace(transform750)

const pixelCritterF5 = new Entity('pixelCritterF5')
engine.addEntity(pixelCritterF5)
pixelCritterF5.setParent(_scene)
pixelCritterF5.addComponentOrReplace(gltfShape16)
const transform751 = new Transform({
  position: new Vector3(9.477005958557129, 9.658951759338379, 56.55845642089844),
  rotation: new Quaternion(-0.17452800273895264, -0.6856803894042969, -0.1301218867301941, -0.6945866942405701),
  scale: new Vector3(1.703092098236084, 1.6653107404708862, 1.0455533266067505)
})
pixelCritterF5.addComponentOrReplace(transform751)

const invisibleWall32 = new Entity('invisibleWall32')
engine.addEntity(invisibleWall32)
invisibleWall32.setParent(_scene)
const transform752 = new Transform({
  position: new Vector3(50.88652801513672, 0, 11.368825912475586),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 3.9153668880462646, 1)
})
invisibleWall32.addComponentOrReplace(transform752)

const imageFromURL20 = new Entity('imageFromURL20')
engine.addEntity(imageFromURL20)
imageFromURL20.setParent(_scene)
const transform753 = new Transform({
  position: new Vector3(37.52002716064453, 13.455052375793457, 51.31095886230469),
  rotation: new Quaternion(4.778957770826394e-15, -1, 1.1920928244535389e-7, -1.4901161193847656e-8),
  scale: new Vector3(1.7343149185180664, 1.6308515071868896, 1)
})
imageFromURL20.addComponentOrReplace(transform753)

const wallPlainBlack75 = new Entity('wallPlainBlack75')
engine.addEntity(wallPlainBlack75)
wallPlainBlack75.setParent(_scene)
wallPlainBlack75.addComponentOrReplace(gltfShape49)
const transform754 = new Transform({
  position: new Vector3(38.528541564941406, 13.347050666809082, 51.31520462036133),
  rotation: new Quaternion(3.3806270771045283e-16, -0.999999463558197, 1.1920923981278975e-7, -0.001068994402885437),
  scale: new Vector3(-0.9851768612861633, 0.4489307403564453, 0.5795754790306091)
})
wallPlainBlack75.addComponentOrReplace(transform754)

const imageComputerScreen21 = new Entity('imageComputerScreen21')
engine.addEntity(imageComputerScreen21)
imageComputerScreen21.setParent(_scene)
const transform755 = new Transform({
  position: new Vector3(37.50428771972656, 12.461102485656738, 51.51231384277344),
  rotation: new Quaternion(1.4665378633704762e-10, -1.6051471263267558e-8, -0.009655325673520565, 0.9999533891677856),
  scale: new Vector3(2.880678176879883, 3.4547712802886963, 1.0000038146972656)
})
imageComputerScreen21.addComponentOrReplace(transform755)

const floorGlass12 = new Entity('floorGlass12')
engine.addEntity(floorGlass12)
floorGlass12.setParent(_scene)
floorGlass12.addComponentOrReplace(gltfShape53)
const transform756 = new Transform({
  position: new Vector3(37.51844024658203, 40.50661087036133, 51.923770904541016),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5794596672058105, 9.509812355041504, 3.860703468322754)
})
floorGlass12.addComponentOrReplace(transform756)

const floorGlass13 = new Entity('floorGlass13')
engine.addEntity(floorGlass13)
floorGlass13.setParent(_scene)
floorGlass13.addComponentOrReplace(gltfShape53)
const transform757 = new Transform({
  position: new Vector3(37.44996643066406, 38.10294723510742, 63.517616271972656),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.5794596672058105, 9.509827613830566, 4.428526878356934)
})
floorGlass13.addComponentOrReplace(transform757)

const floorGlass14 = new Entity('floorGlass14')
engine.addEntity(floorGlass14)
floorGlass14.setParent(_scene)
floorGlass14.addComponentOrReplace(gltfShape53)
const transform758 = new Transform({
  position: new Vector3(37.18504333496094, 38.11906051635742, 52.10782241821289),
  rotation: new Quaternion(0.4999999403953552, 0.4999999403953552, -0.5000001192092896, 0.5),
  scale: new Vector3(2.9029829502105713, 9.509827613830566, 4.42423677444458)
})
floorGlass14.addComponentOrReplace(transform758)

const floorGlass15 = new Entity('floorGlass15')
engine.addEntity(floorGlass15)
floorGlass15.setParent(_scene)
floorGlass15.addComponentOrReplace(gltfShape53)
const transform759 = new Transform({
  position: new Vector3(22.993635177612305, 38.11906051635742, 52.239253997802734),
  rotation: new Quaternion(0.4999999403953552, 0.4999999403953552, -0.5000001192092896, 0.5),
  scale: new Vector3(2.9029829502105713, 9.509827613830566, 4.42423677444458)
})
floorGlass15.addComponentOrReplace(transform759)

const cyberpunkDoor4 = new Entity('cyberpunkDoor4')
engine.addEntity(cyberpunkDoor4)
cyberpunkDoor4.setParent(_scene)
const transform760 = new Transform({
  position: new Vector3(23.428972244262695, 43.43441390991211, 63.6281623840332),
  rotation: new Quaternion(4.470348358154297e-8, -2.3841855067985307e-7, -1, 9.822651454152384e-15),
  scale: new Vector3(6.8062920570373535, 1.700364351272583, 0.2646923065185547)
})
cyberpunkDoor4.addComponentOrReplace(transform760)

const cyberpunkDoor5 = new Entity('cyberpunkDoor5')
engine.addEntity(cyberpunkDoor5)
cyberpunkDoor5.setParent(_scene)
const transform761 = new Transform({
  position: new Vector3(37.16031265258789, 43.43441390991211, 52.14807891845703),
  rotation: new Quaternion(1, 3.1755625181566303e-15, 5.960464477539063e-8, -1.1920926823449918e-7),
  scale: new Vector3(6.8522114753723145, 1.700364351272583, 0.2646923065185547)
})
cyberpunkDoor5.addComponentOrReplace(transform761)

const cyberpunkDoor7 = new Entity('cyberpunkDoor7')
engine.addEntity(cyberpunkDoor7)
cyberpunkDoor7.setParent(_scene)
const transform762 = new Transform({
  position: new Vector3(37.359405517578125, 43.43441390991211, 63.546234130859375),
  rotation: new Quaternion(0.7071066498756409, 1.6858737694747106e-7, 0.70710688829422, -8.429368136830817e-8),
  scale: new Vector3(5.665491580963135, 1.700364351272583, 0.2646920382976532)
})
cyberpunkDoor7.addComponentOrReplace(transform762)

const cyberpunkDoor6 = new Entity('cyberpunkDoor6')
engine.addEntity(cyberpunkDoor6)
cyberpunkDoor6.setParent(_scene)
const transform763 = new Transform({
  position: new Vector3(23.39218521118164, 43.43441390991211, 51.578025817871094),
  rotation: new Quaternion(-0.7071070671081543, 1.685873343149069e-7, 0.7071065902709961, 8.42937097900176e-8),
  scale: new Vector3(5.665492057800293, 1.7003648281097412, 0.2646920680999756)
})
cyberpunkDoor6.addComponentOrReplace(transform763)

const imageFromURL21 = new Entity('imageFromURL21')
engine.addEntity(imageFromURL21)
imageFromURL21.setParent(_scene)
const transform764 = new Transform({
  position: new Vector3(5.919345378875732, 50.73957824707031, 33.710906982421875),
  rotation: new Quaternion(-2.177062080483132e-15, 0, 1.088531040241566e-15, 1),
  scale: new Vector3(1.0205358266830444, 0.8573538064956665, 1.0000159740447998)
})
imageFromURL21.addComponentOrReplace(transform764)

const imageFromURL22 = new Entity('imageFromURL22')
engine.addEntity(imageFromURL22)
imageFromURL22.setParent(_scene)
const transform765 = new Transform({
  position: new Vector3(5.919345378875732, 50.73957824707031, 32.19290542602539),
  rotation: new Quaternion(-4.207027995829608e-15, 1, -1.1920928244535389e-7, -1.4901161193847656e-8),
  scale: new Vector3(1.0205358266830444, 0.8573538064956665, 1.0000159740447998)
})
imageFromURL22.addComponentOrReplace(transform765)

const invisibleWall33 = new Entity('invisibleWall33')
engine.addEntity(invisibleWall33)
invisibleWall33.setParent(_scene)
const transform766 = new Transform({
  position: new Vector3(8.774740219116211, 47, 33.02226638793945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7859883308410645, 0.6037004590034485, 1.0000001192092896)
})
invisibleWall33.addComponentOrReplace(transform766)

const invisibleWall34 = new Entity('invisibleWall34')
engine.addEntity(invisibleWall34)
invisibleWall34.setParent(_scene)
const transform767 = new Transform({
  position: new Vector3(0.8748667240142822, 27.98885154724121, 37.405033111572266),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 0.3392207622528076)
})
invisibleWall34.addComponentOrReplace(transform767)

const clickArea20 = new Entity('clickArea20')
engine.addEntity(clickArea20)
clickArea20.setParent(_scene)
const transform768 = new Transform({
  position: new Vector3(0.9508028030395508, 27.897106170654297, 37.545528411865234),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
clickArea20.addComponentOrReplace(transform768)

const fingerprintAccessC2 = new Entity('fingerprintAccessC2')
engine.addEntity(fingerprintAccessC2)
fingerprintAccessC2.setParent(_scene)
const transform769 = new Transform({
  position: new Vector3(23.875850677490234, 44.2770881652832, 56.47509002685547),
  rotation: new Quaternion(-2.8378267651638176e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
fingerprintAccessC2.addComponentOrReplace(transform769)

const invisibleWall35 = new Entity('invisibleWall35')
engine.addEntity(invisibleWall35)
invisibleWall35.setParent(_scene)
const transform770 = new Transform({
  position: new Vector3(29.952035903930664, 43.92172622680664, 56.14860916137695),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9336726069450378, 0.5439433455467224, 1.0000001192092896)
})
invisibleWall35.addComponentOrReplace(transform770)

const invisibleWall36 = new Entity('invisibleWall36')
engine.addEntity(invisibleWall36)
invisibleWall36.setParent(_scene)
const transform771 = new Transform({
  position: new Vector3(29.959829330444336, 51.50185775756836, 56.7757568359375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9336726069450378, 0.5439433455467224, 1.0000001192092896)
})
invisibleWall36.addComponentOrReplace(transform771)

const clickArea30 = new Entity('clickArea30')
engine.addEntity(clickArea30)
clickArea30.setParent(_scene)
const transform772 = new Transform({
  position: new Vector3(6.752242088317871, 0.009705543518066406, 1.302618384361267),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.12255155295133591, 0.25387245416641235, 0.2384037971496582)
})
clickArea30.addComponentOrReplace(transform772)

const floorGlass16 = new Entity('floorGlass16')
engine.addEntity(floorGlass16)
floorGlass16.setParent(_scene)
floorGlass16.addComponentOrReplace(gltfShape53)
const transform773 = new Transform({
  position: new Vector3(1.1019325256347656, 34.94157791137695, 39.563358306884766),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.1510374546051025, 9.509825706481934, 4.277088165283203)
})
floorGlass16.addComponentOrReplace(transform773)

const stoneGold2 = new Entity('stoneGold2')
engine.addEntity(stoneGold2)
stoneGold2.setParent(_scene)
const gltfShape57 = new GLTFShape("models/stone_gold.glb")
gltfShape57.withCollisions = true
gltfShape57.isPointerBlocker = true
gltfShape57.visible = true
stoneGold2.addComponentOrReplace(gltfShape57)
const transform774 = new Transform({
  position: new Vector3(53.87733459472656, 15.874237060546875, 31.54662322998047),
  rotation: new Quaternion(-3.2230495145203113e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(-0.8170657753944397, 13.994417190551758, 0.4745006859302521)
})
stoneGold2.addComponentOrReplace(transform774)

const stoneGold = new Entity('stoneGold')
engine.addEntity(stoneGold)
stoneGold.setParent(_scene)
stoneGold.addComponentOrReplace(gltfShape57)
const transform775 = new Transform({
  position: new Vector3(53.87733459472656, 15.874237060546875, 29.349567413330078),
  rotation: new Quaternion(-3.2230495145203113e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(-0.8170660138130188, 13.994417190551758, 0.4745008051395416)
})
stoneGold.addComponentOrReplace(transform775)

const stoneGold3 = new Entity('stoneGold3')
engine.addEntity(stoneGold3)
stoneGold3.setParent(_scene)
stoneGold3.addComponentOrReplace(gltfShape57)
const transform776 = new Transform({
  position: new Vector3(53.87733459472656, 16.911928176879883, 30.467037200927734),
  rotation: new Quaternion(-3.2230495145203113e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(-0.817066490650177, 13.994417190551758, 0.4745010435581207)
})
stoneGold3.addComponentOrReplace(transform776)

const stoneGold4 = new Entity('stoneGold4')
engine.addEntity(stoneGold4)
stoneGold4.setParent(_scene)
stoneGold4.addComponentOrReplace(gltfShape57)
const transform777 = new Transform({
  position: new Vector3(0.32363730669021606, 26.237407684326172, 38.84794998168945),
  rotation: new Quaternion(-3.2230495145203113e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(-1.1999931335449219, 8.839332580566406, 0.23229365050792694)
})
stoneGold4.addComponentOrReplace(transform777)

const stoneGold5 = new Entity('stoneGold5')
engine.addEntity(stoneGold5)
stoneGold5.setParent(_scene)
stoneGold5.addComponentOrReplace(gltfShape57)
const transform778 = new Transform({
  position: new Vector3(0.32363730669021606, 26.237407684326172, 27.058401107788086),
  rotation: new Quaternion(-3.2230495145203113e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(-1.199993371963501, 8.839332580566406, 0.23229368031024933)
})
stoneGold5.addComponentOrReplace(transform778)

const stoneGold6 = new Entity('stoneGold6')
engine.addEntity(stoneGold6)
stoneGold6.setParent(_scene)
stoneGold6.addComponentOrReplace(gltfShape57)
const transform779 = new Transform({
  position: new Vector3(0.32363730669021606, 26.237407684326172, 33.086891174316406),
  rotation: new Quaternion(-3.2230495145203113e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(-10.886045455932617, 6.805459976196289, 0.10810267180204391)
})
stoneGold6.addComponentOrReplace(transform779)

const scoreboard3 = new Entity('scoreboard3')
engine.addEntity(scoreboard3)
scoreboard3.setParent(_scene)
const transform780 = new Transform({
  position: new Vector3(29.40290641784668, 36.741493225097656, 52.23124313354492),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scoreboard3.addComponentOrReplace(transform780)

const invisibleWall37 = new Entity('invisibleWall37')
engine.addEntity(invisibleWall37)
invisibleWall37.setParent(_scene)
const transform781 = new Transform({
  position: new Vector3(30.185091018676758, 36.26840591430664, 63.59463882446289),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(13.890542030334473, 2.56137752532959, 0.20172595977783203)
})
invisibleWall37.addComponentOrReplace(transform781)

const invisibleWall38 = new Entity('invisibleWall38')
engine.addEntity(invisibleWall38)
invisibleWall38.setParent(_scene)
const transform782 = new Transform({
  position: new Vector3(30.185091018676758, 36.26840591430664, 52.110347747802734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(13.890542030334473, 2.56137752532959, 0.20172595977783203)
})
invisibleWall38.addComponentOrReplace(transform782)

const invisibleWall39 = new Entity('invisibleWall39')
engine.addEntity(invisibleWall39)
invisibleWall39.setParent(_scene)
const transform783 = new Transform({
  position: new Vector3(23.467140197753906, 36.26840591430664, 57.4860954284668),
  rotation: new Quaternion(-4.419967737725485e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(12.443154335021973, 2.56137752532959, 0.20172645151615143)
})
invisibleWall39.addComponentOrReplace(transform783)

const invisibleWall40 = new Entity('invisibleWall40')
engine.addEntity(invisibleWall40)
invisibleWall40.setParent(_scene)
const transform784 = new Transform({
  position: new Vector3(37.30997085571289, 36.26840591430664, 57.4860954284668),
  rotation: new Quaternion(-4.419967737725485e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(12.44316577911377, 2.56137752532959, 0.20172663033008575)
})
invisibleWall40.addComponentOrReplace(transform784)

const triggerArea7 = new Entity('triggerArea7')
engine.addEntity(triggerArea7)
triggerArea7.setParent(_scene)
const transform785 = new Transform({
  position: new Vector3(31.52365493774414, 33.5, 59.37894058227539),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.352463722229004, 1, 8.523841857910156)
})
triggerArea7.addComponentOrReplace(transform785)

const plainText8 = new Entity('plainText8')
engine.addEntity(plainText8)
plainText8.setParent(_scene)
const transform786 = new Transform({
  position: new Vector3(30.21552085876465, 34.16472244262695, 63.43269729614258),
  rotation: new Quaternion(-8.401279346682833e-15, 0.9998965263366699, -1.191969474234611e-7, 0.014389898627996445),
  scale: new Vector3(0.8606100678443909, 0.6788215041160583, 0.999528169631958)
})
plainText8.addComponentOrReplace(transform786)

const barHost1 = new Entity('barHost1')
engine.addEntity(barHost1)
barHost1.setParent(_scene)
const barHostTransform8 = new Transform({
  position: new Vector3(7.055558681488037, 0.8591527938842773, 26.6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barHost1.addComponentOrReplace(barHostTransform8)
barHost1.getComponent(Transform).rotate(Vector3.Up(), 180)

const barHost2 = new Entity('barHost2')
engine.addEntity(barHost2)
barHost2.setParent(_scene)
const barHost2Transform8 = new Transform({
  position: new Vector3(9.746240615844727, 0.8591527938842773, 26.6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barHost2.addComponentOrReplace(barHost2Transform8)
barHost2.getComponent(Transform).rotate(Vector3.Up(), 180)


const barHost3 = new Entity('barHost3')
engine.addEntity(barHost3)
barHost3.setParent(_scene)
const barHost3Transform8 = new Transform({
  position: new Vector3(62, 24.898466110229492, 40.172061920166016),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barHost3.addComponentOrReplace(barHost3Transform8)
barHost3.getComponent(Transform).rotate(Vector3.Up(), 90)


const barHost4 = new Entity('barHost4')
engine.addEntity(barHost4)
barHost4.setParent(_scene)
const barHost4Transform8 = new Transform({
  position: new Vector3(62, 24.859153747558594, 42.894630432128906),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barHost4.addComponentOrReplace(barHost4Transform8)
barHost4.getComponent(Transform).rotate(Vector3.Up(), 90)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
const script14 = new Script14()
const script15 = new Script15()
const script16 = new Script16()
const script17 = new Script17()
const script18 = new Script18()
const script19 = new Script19()
const script20 = new Script20()
const script21 = new Script21()
const script22 = new Script22()
const script23 = new Script23()
const script24 = new Script24()
const script25 = new Script25()
const script26 = new Script26()
const script27 = new Script27()
const script28 = new Script28()
const script29 = new Script29()
const script30 = new Script30()
const script31 = new Script31()
const script32 = new Script32()
const script33 = new Script33()
const script34 = new Script34()
const script35 = new Script35()
const script36 = new Script36()
const script37 = new Script37()
const script38 = new Script38()
const script39 = new Script39()
const script40 = new Script40()
const script41 = new Script41()
const script42 = new Script42()
const script43 = new Script43()
const script44 = new Script44()
const scriptArcade1 = new ScriptArcade()
const scriptBar1 = new ScriptBar()
const scriptBar2 = new ScriptBar()
const scriptBar3 = new ScriptBar()
const scriptBar4 = new ScriptBar()

script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script13.init(options)
script14.init(options)
script15.init(options)
script16.init(options)
script17.init(options)
script18.init(options)
script19.init(options)
script20.init(options)
script21.init(options)
script22.init(options)
script23.init(options)
script24.init(options)
script25.init(options)
script26.init(options)
script27.init(options)
script28.init(options)
script29.init(options)
script30.init(options)
script31.init(options)
script32.init(options)
script33.init(options)
script34.init(options)
script35.init(options)
script36.init(options)
script37.init(options)
script38.init(options)
script39.init(options)
script40.init(options)
script41.init(options)
script42.init(options)
script43.init(options)
script44.init(options)
scriptArcade1.init(options)
scriptBar1.init(options)
scriptBar2.init(options)
scriptBar3.init(options)
scriptBar4.init(options)

script1.spawn(cyberpunkDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor","actionId":"toggle","values":{}}]}, createChannel(channelId, cyberpunkDoor, channelBus))
script2.spawn(openAndClosedSign, {"startOn":true,"clickable":false}, createChannel(channelId, openAndClosedSign, channelBus))
script2.spawn(openAndClosedSign2, {"startOn":true,"clickable":false,"onActivate":[]}, createChannel(channelId, openAndClosedSign2, channelBus))
script3.spawn(videoScreenStanding, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoScreenStanding","actionId":"toggle","values":{}}],"station":"https://theuniverse.club/live/consensys/index.m3u8"}, createChannel(channelId, videoScreenStanding, channelBus))
script2.spawn(openAndClosedSign3, {"startOn":true,"clickable":false}, createChannel(channelId, openAndClosedSign3, channelBus))
script4.spawn(helicopter, {"onActivate":[]}, createChannel(channelId, helicopter, channelBus))
script5.spawn(radioCyberpunk, {"startOn":false,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radioCyberpunk","actionId":"activate","values":{}}],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3","onActivate":[],"onDeactivate":[]}, createChannel(channelId, radioCyberpunk, channelBus))
script6.spawn(toolbox, {}, createChannel(channelId, toolbox, channelBus))
script7.spawn(imageComputerScreen, {"image":"https://i.imgur.com/FpDqmJJs.gif"}, createChannel(channelId, imageComputerScreen, channelBus))
script7.spawn(imageComputerScreen2, {"image":"https://i.imgur.com/YzWn3Hws.jpeg"}, createChannel(channelId, imageComputerScreen2, channelBus))
script7.spawn(imageComputerScreen3, {"image":"https://i.imgur.com/xS64vejs.jpeg"}, createChannel(channelId, imageComputerScreen3, channelBus))
script7.spawn(imageComputerScreen4, {"image":"https://i.imgur.com/ja1tdo5s.jpg"}, createChannel(channelId, imageComputerScreen4, channelBus))
script3.spawn(videoScreenStanding2, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoScreenStanding2","actionId":"toggle","values":{}}],"station":"https://theuniverse.club/live/consensys/index.m3u8"}, createChannel(channelId, videoScreenStanding2, channelBus))
script6.spawn(toolbox2, {}, createChannel(channelId, toolbox2, channelBus))
script8.spawn(invisibleWall, {"enabled":true}, createChannel(channelId, invisibleWall, channelBus))
script7.spawn(imageComputerScreen5, {"image":"https://i.imgur.com/d25gO61.jpg"}, createChannel(channelId, imageComputerScreen5, channelBus))
script9.spawn(taxiHorizontalPlatform, {"distance":33,"speed":3,"autoStart":true,"onReachEnd":[{"entityName":"taxiHorizontalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"taxiHorizontalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, taxiHorizontalPlatform, channelBus))
script9.spawn(taxiHorizontalPlatform2, {"distance":67,"speed":19,"autoStart":true,"onReachEnd":[{"entityName":"taxiHorizontalPlatform2","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"taxiHorizontalPlatform2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, taxiHorizontalPlatform2, channelBus))
script10.spawn(ropeLight, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight, channelBus))
script10.spawn(ropeLight2, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight2, channelBus))
script10.spawn(ropeLight3, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight3, channelBus))
script10.spawn(ropeLight4, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight4, channelBus))
script10.spawn(ropeLight5, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight5, channelBus))
script10.spawn(ropeLight6, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight6, channelBus))
script10.spawn(ropeLight7, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight7, channelBus))
script10.spawn(ropeLight8, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight8, channelBus))
script9.spawn(taxiHorizontalPlatform3, {"distance":70,"speed":19,"autoStart":true,"onReachEnd":[{"entityName":"taxiHorizontalPlatform3","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"taxiHorizontalPlatform3","actionId":"goToEnd","values":{}}]}, createChannel(channelId, taxiHorizontalPlatform3, channelBus))
script9.spawn(taxiHorizontalPlatform4, {"distance":67,"speed":20,"autoStart":true,"onReachEnd":[{"entityName":"taxiHorizontalPlatform4","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"taxiHorizontalPlatform4","actionId":"goToEnd","values":{}}]}, createChannel(channelId, taxiHorizontalPlatform4, channelBus))
script2.spawn(openAndClosedSign5, {"startOn":false,"clickable":true,"onActivate":[{"entityName":"ironFenceDoor2","actionId":"open","values":{}},{"entityName":"ironFenceDoor3","actionId":"open","values":{}}],"onDeactivate":[{"entityName":"ironFenceDoor2","actionId":"close","values":{}},{"entityName":"ironFenceDoor3","actionId":"close","values":{}}]}, createChannel(channelId, openAndClosedSign5, channelBus))
script8.spawn(invisibleWall2, {"enabled":true}, createChannel(channelId, invisibleWall2, channelBus))
script8.spawn(invisibleWall3, {"enabled":true}, createChannel(channelId, invisibleWall3, channelBus))
script6.spawn(toolbox3, {}, createChannel(channelId, toolbox3, channelBus))
script6.spawn(toolbox4, {}, createChannel(channelId, toolbox4, channelBus))
script5.spawn(radioCyberpunk2, {"startOn":false,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radioCyberpunk2","actionId":"toggle","values":{}}],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3","onActivate":[],"onDeactivate":[]}, createChannel(channelId, radioCyberpunk2, channelBus))
script11.spawn(mixtable, {"onActivate":[{"entityName":"toggleButton","actionId":"activate","values":{}},{"entityName":"toggleButton2","actionId":"activate","values":{}},{"entityName":"toggleButton3","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"toggleButton2","actionId":"deactivate","values":{}},{"entityName":"toggleButton","actionId":"deactivate","values":{}},{"entityName":"toggleButton3","actionId":"deactivate","values":{}}]}, createChannel(channelId, mixtable, channelBus))
script2.spawn(openAndClosedSign6, {"startOn":true,"clickable":false}, createChannel(channelId, openAndClosedSign6, channelBus))
script8.spawn(invisibleWall5, {"enabled":true}, createChannel(channelId, invisibleWall5, channelBus))
script12.spawn(toggleButton, {"onActivate":[],"onDeactivate":[]}, createChannel(channelId, toggleButton, channelBus))
script12.spawn(toggleButton2, {"onActivate":[{"entityName":"radioCyberpunk","actionId":"activate","values":{}},{"entityName":"radioCyberpunk2","actionId":"activate","values":{}},{"entityName":"radioCyberpunk3","actionId":"activate","values":{}},{"entityName":"radioCyberpunk4","actionId":"activate","values":{}},{"entityName":"radioCyberpunk5","actionId":"activate","values":{}},{"entityName":"radioCyberpunk6","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"radioCyberpunk","actionId":"deactivate","values":{}},{"entityName":"radioCyberpunk2","actionId":"deactivate","values":{}},{"entityName":"radioCyberpunk3","actionId":"deactivate","values":{}},{"entityName":"radioCyberpunk4","actionId":"deactivate","values":{}},{"entityName":"radioCyberpunk5","actionId":"deactivate","values":{}},{"entityName":"radioCyberpunk6","actionId":"deactivate","values":{}}]}, createChannel(channelId, toggleButton2, channelBus))
script12.spawn(toggleButton3, {"onActivate":[{"entityName":"videoScreenStanding","actionId":"activate","values":{}},{"entityName":"videoScreenStanding2","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"videoScreenStanding","actionId":"deactivate","values":{}},{"entityName":"videoScreenStanding2","actionId":"deactivate","values":{}},{"entityName":"invisibleWall","actionId":"enable","values":{}}]}, createChannel(channelId, toggleButton3, channelBus))
script13.spawn(wallExtractorFan, {}, createChannel(channelId, wallExtractorFan, channelBus))
script13.spawn(wallExtractorFan3, {"onActivate":[]}, createChannel(channelId, wallExtractorFan3, channelBus))
script14.spawn(imageCubeA4, {"image":"https://i.imgur.com/X43gsgPs.jpeg"}, createChannel(channelId, imageCubeA4, channelBus))
script14.spawn(imageCubeA5, {"image":"https://i.imgur.com/lYY4UdSs.jpeg"}, createChannel(channelId, imageCubeA5, channelBus))
script15.spawn(rainLight, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight, channelBus))
script16.spawn(verticalBlackPad, {"distance":25,"speed":1,"autoStart":false,"onReachEnd":[{"entityName":"toggleButton5","actionId":"deactivate","values":{}}],"onReachStart":[{"entityName":"toggleButton5","actionId":"deactivate","values":{}}]}, createChannel(channelId, verticalBlackPad, channelBus))
script16.spawn(verticalBlackPad2, {"distance":20,"speed":3,"autoStart":false,"onReachEnd":[{"entityName":"toggleButton4","actionId":"deactivate","values":{}}],"onReachStart":[{"entityName":"toggleButton4","actionId":"deactivate","values":{}}]}, createChannel(channelId, verticalBlackPad2, channelBus))
script12.spawn(toggleButton4, {"onActivate":[{"entityName":"verticalBlackPad2","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"verticalBlackPad2","actionId":"goToStart","values":{}}]}, createChannel(channelId, toggleButton4, channelBus))
script12.spawn(toggleButton5, {"onActivate":[{"entityName":"verticalBlackPad","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"verticalBlackPad","actionId":"goToStart","values":{}}]}, createChannel(channelId, toggleButton5, channelBus))
script5.spawn(radioCyberpunk3, {"startOn":false,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radioCyberpunk3","actionId":"toggle","values":{}}],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3","onActivate":[],"onDeactivate":[]}, createChannel(channelId, radioCyberpunk3, channelBus))
script5.spawn(radioCyberpunk4, {"startOn":false,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radioCyberpunk4","actionId":"toggle","values":{}}],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3","onActivate":[],"onDeactivate":[]}, createChannel(channelId, radioCyberpunk4, channelBus))
script5.spawn(radioCyberpunk5, {"startOn":false,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radioCyberpunk5","actionId":"toggle","values":{}}],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3","onActivate":[],"onDeactivate":[]}, createChannel(channelId, radioCyberpunk5, channelBus))
script5.spawn(radioCyberpunk6, {"startOn":false,"volume":1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radioCyberpunk6","actionId":"toggle","values":{}}],"station":"https://icecast.ravepartyradio.org/ravepartyradio-192.mp3","onActivate":[],"onDeactivate":[]}, createChannel(channelId, radioCyberpunk6, channelBus))
script14.spawn(imageCubeA7, {"image":"https://i.imgur.com/zvgBkMus.gif"}, createChannel(channelId, imageCubeA7, channelBus))
script14.spawn(imageCubeA9, {"image":"https://i.imgur.com/Wrok4nYs.jpg"}, createChannel(channelId, imageCubeA9, channelBus))
script17.spawn(imageCubeB2, {"image":"https://i.imgur.com/mf9gMs1s.gif"}, createChannel(channelId, imageCubeB2, channelBus))
script17.spawn(imageCubeB3, {"image":"https://i.imgur.com/pTeqjIks.jpg"}, createChannel(channelId, imageCubeB3, channelBus))
script18.spawn(imageBillboardBlack, {"image":"https://i.imgur.com/pUCcUlkl.jpg"}, createChannel(channelId, imageBillboardBlack, channelBus))
script14.spawn(imageCubeA3, {"image":"https://i.imgur.com/luxUKdss.jpeg"}, createChannel(channelId, imageCubeA3, channelBus))
script14.spawn(imageCubeA6, {"image":"https://i.imgur.com/qh5rY4cs.jpg"}, createChannel(channelId, imageCubeA6, channelBus))
script17.spawn(imageCubeB, {"image":"https://i.imgur.com/BbVqDNCs.png"}, createChannel(channelId, imageCubeB, channelBus))
script17.spawn(imageCubeB5, {"image":"https://i.imgur.com/Dje0MVIs.jpg"}, createChannel(channelId, imageCubeB5, channelBus))
script17.spawn(imageCubeB11, {"image":"https://i.imgur.com/gN1iYXrs.jpg"}, createChannel(channelId, imageCubeB11, channelBus))
script17.spawn(imageCubeB12, {"image":"https://i.imgur.com/qgNv1eUs.jpg"}, createChannel(channelId, imageCubeB12, channelBus))
script17.spawn(imageCubeB13, {"image":"https://i.imgur.com/gN1iYXrs.jpg"}, createChannel(channelId, imageCubeB13, channelBus))
script17.spawn(imageCubeB15, {"image":"https://i.imgur.com/gN1iYXrs.jpg"}, createChannel(channelId, imageCubeB15, channelBus))
script17.spawn(imageCubeB16, {"image":"https://i.imgur.com/gN1iYXrs.jpg"}, createChannel(channelId, imageCubeB16, channelBus))
script17.spawn(imageCubeB6, {"image":"https://i.imgur.com/gN1iYXrs.jpg"}, createChannel(channelId, imageCubeB6, channelBus))
script17.spawn(imageCubeB7, {"image":"https://i.imgur.com/bGOSL8xl.jpg"}, createChannel(channelId, imageCubeB7, channelBus))
script17.spawn(imageCubeB8, {"image":"https://i.imgur.com/Wrok4nYl.jpg"}, createChannel(channelId, imageCubeB8, channelBus))
script17.spawn(imageCubeB9, {"image":"https://i.imgur.com/kmx25dsm.jpg"}, createChannel(channelId, imageCubeB9, channelBus))
script19.spawn(imageCubeC, {"image":"https://i.imgur.com/luxUKdsl.jpeg"}, createChannel(channelId, imageCubeC, channelBus))
script19.spawn(imageCubeC3, {"image":"https://i.imgur.com/wJpZsYJl.jpg"}, createChannel(channelId, imageCubeC3, channelBus))
script19.spawn(imageCubeC4, {"image":"https://i.imgur.com/959zIdEl.jpg"}, createChannel(channelId, imageCubeC4, channelBus))
script19.spawn(imageCubeC5, {"image":"https://i.imgur.com/8CjqWrSl.jpg"}, createChannel(channelId, imageCubeC5, channelBus))
script19.spawn(imageCubeC8, {"image":"https://i.imgur.com/BEWkRshl.jpg"}, createChannel(channelId, imageCubeC8, channelBus))
script19.spawn(imageCubeC9, {"image":"https://i.imgur.com/BEWkRshl.jpg"}, createChannel(channelId, imageCubeC9, channelBus))
script17.spawn(imageCubeB10, {"image":"https://i.imgur.com/Wrok4nYl.jpg"}, createChannel(channelId, imageCubeB10, channelBus))
script7.spawn(imageComputerScreen7, {"image":"https://i.imgur.com/FpDqmJJs.gif"}, createChannel(channelId, imageComputerScreen7, channelBus))
script8.spawn(invisibleWall6, {"enabled":true}, createChannel(channelId, invisibleWall6, channelBus))
script20.spawn(scoreboard, {"initialVal":6,"threshold":0,"enabled":true,"onThreshold":[{"entityName":"toolbox5","actionId":"print","values":{"message":"All Locations Tagged.  Great Job!\nWe have your next assignment.\nWhen you are ready, pick up\nthe phone with our out of order sign\nand our tag on the side.\nTalk to you soon.","duration":10,"multiplayer":false}},{"entityName":"clickArea15","actionId":"disable","values":{}},{"entityName":"clickArea17","actionId":"disable","values":{}},{"entityName":"clickArea18","actionId":"disable","values":{}},{"entityName":"clickArea19","actionId":"disable","values":{}},{"entityName":"toolbox5","actionId":"move","values":{"target":"helicopter","x":0,"y":15,"z":0,"curve":"easeinoutexpo","speed":1,"relative":true,"onComplete":[{"entityName":"toolbox5","actionId":"move","values":{"target":"helicopter","x":0,"y":15,"z":0,"curve":"easeinoutsine","speed":5,"relative":true,"onComplete":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"helicopter","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":2,"onComplete":[{"entityName":"helicopter","actionId":"deactivate","values":{}}]}}]}}]}},{"entityName":"helicopter","actionId":"activate","values":{}},{"entityName":"clickArea17","actionId":"disable","values":{}},{"entityName":"invisibleWall30","actionId":"disable","values":{}},{"entityName":"clickArea25","actionId":"disable","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea25","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, scoreboard, channelBus))
script21.spawn(policeCar, {"clickable":true,"onActivate":[]}, createChannel(channelId, policeCar, channelBus))
script22.spawn(tablet, {"text":"I partied too hard last night \nat the penthouse on the top floor.  \nMy head is pounding and I cannot find \nthe key that activates the mixing board.   \nThis is too much to handle right now.  \nGoing to sleep off this hangover.   \nCatch ya later.","fontSize":36}, createChannel(channelId, tablet, channelBus))
script23.spawn(yellowAccessCard2, {"target":"pixelCritterF","respawns":true,"onUse":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Software Installed","duration":5,"multiplayer":false}},{"entityName":"scoreboard2","actionId":"decrease","values":{}},{"entityName":"yellowAccessCard2","actionId":"equip","values":{}}],"onEquip":[]}, createChannel(channelId, yellowAccessCard2, channelBus))
script6.spawn(toolbox5, {}, createChannel(channelId, toolbox5, channelBus))
script24.spawn(silverKey, {"target":"invisibleWall7","respawns":true,"onUse":[{"entityName":"openAndClosedSign5","actionId":"activate","values":{}},{"entityName":"invisibleWall7","actionId":"disable","values":{}},{"entityName":"clickArea3","actionId":"disable","values":{}},{"entityName":"toolbox5","actionId":"move","values":{"target":"clickArea3","x":0,"y":30,"z":0,"curve":"linear","speed":10,"relative":true,"onComplete":[]}}],"onEquip":[{"entityName":"spark","actionId":"deactivate","values":{}}]}, createChannel(channelId, silverKey, channelBus))
script25.spawn(clickArea, {"enabled":true,"onClickText":"Find Blue Access Key To Play Music","button":"POINTER","onClick":[]}, createChannel(channelId, clickArea, channelBus))
script26.spawn(blueAccessCard, {"target":"invisibleWall8","respawns":true,"onUse":[{"entityName":"invisibleWall8","actionId":"disable","values":{}},{"entityName":"clickArea","actionId":"disable","values":{}},{"entityName":"toolbox5","actionId":"move","values":{"target":"clickArea","x":0,"y":30,"z":0,"curve":"linear","speed":10,"relative":true,"onComplete":[]}},{"entityName":"invisibleWall26","actionId":"disable","values":{}}],"onEquip":[{"entityName":"toolbox5","actionId":"print","values":{"message":"DJ System Activation Card","duration":5,"multiplayer":true}}]}, createChannel(channelId, blueAccessCard, channelBus))
script27.spawn(ambientSound, {"sound":"City","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script27.spawn(ambientSound2, {"sound":"City","active":true,"loop":true}, createChannel(channelId, ambientSound2, channelBus))
script27.spawn(ambientSound3, {"sound":"City","active":true,"loop":true}, createChannel(channelId, ambientSound3, channelBus))
script27.spawn(ambientSound4, {"sound":"City","active":true,"loop":true}, createChannel(channelId, ambientSound4, channelBus))
script27.spawn(ambientSound5, {"sound":"City","active":true,"loop":true}, createChannel(channelId, ambientSound5, channelBus))
script27.spawn(ambientSound6, {"sound":"City","active":true,"loop":true}, createChannel(channelId, ambientSound6, channelBus))
script28.spawn(indicatorArrow, {"active":false}, createChannel(channelId, indicatorArrow, channelBus))
script25.spawn(clickArea2, {"enabled":true,"onClickText":"Clue","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"print","values":{"message":"This must be the tag (graffiti) used by the gang.  \nAnywhere you see this mischief must not be far behind.","duration":10,"multiplayer":false}}]}, createChannel(channelId, clickArea2, channelBus))
script28.spawn(indicatorArrow2, {"active":true}, createChannel(channelId, indicatorArrow2, channelBus))
script29.spawn(spark, {"active":true}, createChannel(channelId, spark, channelBus))
script30.spawn(ironFenceDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"ironFenceDoor","actionId":"toggle","values":{}}]}, createChannel(channelId, ironFenceDoor, channelBus))
script30.spawn(ironFenceDoor2, {"onClickText":"Open/Close","onClick":[{"entityName":"ironFenceDoor2","actionId":"toggle","values":{}}]}, createChannel(channelId, ironFenceDoor2, channelBus))
script30.spawn(ironFenceDoor3, {"onClickText":"Open/Close","onClick":[{"entityName":"ironFenceDoor3","actionId":"toggle","values":{}}]}, createChannel(channelId, ironFenceDoor3, channelBus))
script25.spawn(clickArea3, {"enabled":true,"onClickText":"Closed For Repairs. Key Required","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Looks like there was break in and is under repairs.  \nDo I see something in there?  \nMaybe we can find the key to unlock these gates","duration":5,"multiplayer":false}}]}, createChannel(channelId, clickArea3, channelBus))
script8.spawn(invisibleWall7, {"enabled":true}, createChannel(channelId, invisibleWall7, channelBus))
script8.spawn(invisibleWall8, {"enabled":true}, createChannel(channelId, invisibleWall8, channelBus))
script25.spawn(clickArea4, {"enabled":true,"onClickText":"Need Help Climbing?","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"print","values":{"message":"To Climb the ladder.  While pressing forward towards the ladder jump repeatedly","duration":5,"multiplayer":false}}]}, createChannel(channelId, clickArea4, channelBus))
script8.spawn(invisibleWall9, {"enabled":true}, createChannel(channelId, invisibleWall9, channelBus))
script25.spawn(clickArea5, {"enabled":true,"onClickText":"Power Control.  Locked. Find Red Access Key","button":"POINTER","onClick":[]}, createChannel(channelId, clickArea5, channelBus))
script31.spawn(plainText, {"text":"5","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script31.spawn(plainText2, {"text":"9","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText2, channelBus))
script31.spawn(plainText3, {"text":"0","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText3, channelBus))
script12.spawn(toggleButton6, {"onActivate":[{"entityName":"toggleButton7","actionId":"activate","values":{}},{"entityName":"toggleButton9","actionId":"activate","values":{}},{"entityName":"toggleButton11","actionId":"activate","values":{}},{"entityName":"toolbox5","actionId":"print","values":{"message":"Did you see that!\nThe city power just went out.  See what you can discover.","duration":10,"multiplayer":false}},{"entityName":"toggleButton15","actionId":"deactivate","values":{}},{"entityName":"toggleButton14","actionId":"activate","values":{}},{"entityName":"triggerArea","actionId":"disable","values":{}},{"entityName":"triggerArea2","actionId":"disable","values":{}},{"entityName":"triggerArea3","actionId":"disable","values":{}},{"entityName":"triggerArea4","actionId":"disable","values":{}},{"entityName":"indicatorArrow3","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"toggleButton8","actionId":"activate","values":{}},{"entityName":"toggleButton10","actionId":"activate","values":{}},{"entityName":"toggleButton12","actionId":"activate","values":{}},{"entityName":"toolbox5","actionId":"print","values":{"message":"Congratulations! You did it!  \nPower has been restored!\nYou should ask the local authorities if there is a reward.\nCheck out the view from the penthouse. \nThe elevators should be working now.\n","duration":10,"multiplayer":false}},{"entityName":"indicatorArrow3","actionId":"deactivate","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"wallPlainBlack15","x":0,"y":1,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toggleButton15","actionId":"activate","values":{}},{"entityName":"toggleButton13","actionId":"activate","values":{}}]}, createChannel(channelId, toggleButton6, channelBus))
script32.spawn(cableBox20, {"redCable":true,"greenCable":true,"blueCable":true,"onClick":[],"onGreenCut":[{"entityName":"clickArea6","actionId":"disable","values":{}},{"entityName":"invisibleWall10","actionId":"disable","values":{}},{"entityName":"toolbox5","actionId":"move","values":{"target":"clickArea6","x":0,"y":30,"z":0,"curve":"linear","speed":10,"relative":true,"onComplete":[]}}],"onBlueCut":[]}, createChannel(channelId, cableBox20, channelBus))
script33.spawn(videoComputerScreen, {"startOn":false,"onClickText":"","volume":1,"onClick":[{"entityName":"videoComputerScreen","actionId":"toggle","values":{}}],"station":"https://theuniverse.club/live/genesisplaza/index.m3u8"}, createChannel(channelId, videoComputerScreen, channelBus))
script34.spawn(padlock2, {"combination":9503,"onSolve":[{"entityName":"cableBox20","actionId":"openBox","values":{}},{"entityName":"toolbox5","actionId":"move","values":{"target":"padlock2","x":0,"y":-5,"z":0,"curve":"linear","speed":10,"relative":true,"onComplete":[]}}]}, createChannel(channelId, padlock2, channelBus))
script35.spawn(keyboard, {"onClick":[{"entityName":"toggleButton6","actionId":"deactivate","values":{}}]}, createChannel(channelId, keyboard, channelBus))
script25.spawn(clickArea6, {"enabled":true,"onClickText":"Locked","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Locked!  What is that device on the back of the monitor.\nMaybe the tags have clues as to what the passcode would be?","duration":10,"multiplayer":false}}]}, createChannel(channelId, clickArea6, channelBus))
script8.spawn(invisibleWall10, {"enabled":true}, createChannel(channelId, invisibleWall10, channelBus))
script27.spawn(ambientSound7, {"sound":"City","active":false,"loop":true}, createChannel(channelId, ambientSound7, channelBus))
script12.spawn(toggleButton7, {"onActivate":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB2","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB3","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB5","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB11","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB12","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB13","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB15","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB16","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB6","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB7","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB8","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB9","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB10","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, toggleButton7, channelBus))
script12.spawn(toggleButton8, {"onActivate":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA4","x":2.25,"y":1.5,"z":2,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA5","x":2.25,"y":1.5,"z":2,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA7","x":2.954738140106201,"y":2.5,"z":2.917898654937744,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA9","x":2.954738140106201,"y":2.5,"z":2.917898654937744,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA3","x":2.954738140106201,"y":2.5,"z":2.917898654937744,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA6","x":2.954738140106201,"y":2.5,"z":2.917898654937744,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"spotlight","x":1,"y":1,"z":1,"curve":"linear","speed":4,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"spotlight2","x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, toggleButton8, channelBus))
script12.spawn(toggleButton9, {"onActivate":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA4","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA5","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA7","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA9","x":0,"y":0.1,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA3","x":0,"y":0.01,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeA6","x":0,"y":0.01,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"spotlight","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"spotlight2","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, toggleButton9, channelBus))
script12.spawn(toggleButton10, {"onActivate":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB2","x":2.569303512573242,"y":2.5,"z":2.411832332611084,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB3","x":1.3945913314819336,"y":1.1694436073303223,"z":0.9481487274169922,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB","x":2.2611076831817627,"y":2.5,"z":2.095139980316162,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB5","x":2.2611076831817627,"y":2.5,"z":2.095139980316162,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB11","x":2.569303512573242,"y":2.5,"z":3.710120677947998,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB12","x":2.569303512573242,"y":2.5,"z":3.710120677947998,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB13","x":2.569303512573242,"y":2.5,"z":2.411832332611084,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB15","x":2.569303512573242,"y":2.5,"z":2.411832332611084,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB16","x":2.569303512573242,"y":2.5,"z":2.411832332611084,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB6","x":2.569303512573242,"y":6.077023029327393,"z":7.114293098449707,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB7","x":14.131146430969238,"y":8.684616088867188,"z":1.8332463502883911,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB8","x":2.569303512573242,"y":9.437712669372559,"z":16.217470169067383,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB9","x":2.569303274154663,"y":6.769559383392334,"z":22.62667465209961,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeB10","x":18.202571868896484,"y":9.437712669372559,"z":1.6728628873825073,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, toggleButton10, channelBus))
script12.spawn(toggleButton11, {"onActivate":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC","x":0,"y":0.01,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC3","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC4","x":0,"y":0.01,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC5","x":0,"y":0.01,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC8","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC9","x":0,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageFromURL3","x":0,"y":0.01,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageFromURL","x":0,"y":0.01,"z":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageFromURL4","x":0.01,"y":0,"z":0,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, toggleButton11, channelBus))
script12.spawn(toggleButton12, {"onActivate":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC","x":4.492833137512207,"y":10.5,"z":23.02570152282715,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC3","x":2.427525281906128,"y":10.5,"z":17.167037963867188,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC4","x":0.6249964237213135,"y":8.14102554321289,"z":13.602348327636719,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC5","x":2.4275259971618652,"y":9.17581558227539,"z":23.02573013305664,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC8","x":0.45255136489868164,"y":10.5,"z":17.167037963867188,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageCubeC9","x":0.45255136489868164,"y":10.5,"z":5.494057655334473,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageFromURL3","x":7.015312671661377,"y":4.7300825119018555,"z":1.0000081062316895,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageFromURL","x":8.082798957824707,"y":4.931175231933594,"z":1,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"imageFromURL4","x":11.334378242492676,"y":5.921043872833252,"z":1,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, toggleButton12, channelBus))
script12.spawn(toggleButton13, {"onActivate":[{"entityName":"ropeLight","actionId":"activate","values":{}},{"entityName":"ropeLight2","actionId":"activate","values":{}},{"entityName":"ropeLight3","actionId":"activate","values":{}},{"entityName":"ropeLight4","actionId":"activate","values":{}},{"entityName":"ropeLight5","actionId":"activate","values":{}},{"entityName":"ropeLight6","actionId":"activate","values":{}},{"entityName":"ropeLight7","actionId":"activate","values":{}},{"entityName":"ropeLight8","actionId":"activate","values":{}},{"entityName":"openAndClosedSign","actionId":"activate","values":{}},{"entityName":"openAndClosedSign2","actionId":"activate","values":{}},{"entityName":"openAndClosedSign3","actionId":"activate","values":{}},{"entityName":"rainLight","actionId":"activate","values":{}},{"entityName":"openAndClosedSign5","actionId":"activate","values":{}},{"entityName":"openAndClosedSign6","actionId":"activate","values":{}},{"entityName":"openAndClosedSign4","actionId":"activate","values":{}}],"onDeactivate":[]}, createChannel(channelId, toggleButton13, channelBus))
script12.spawn(toggleButton14, {"onActivate":[{"entityName":"ropeLight","actionId":"deactivate","values":{}},{"entityName":"ropeLight2","actionId":"deactivate","values":{}},{"entityName":"ropeLight3","actionId":"deactivate","values":{}},{"entityName":"ropeLight4","actionId":"deactivate","values":{}},{"entityName":"ropeLight5","actionId":"deactivate","values":{}},{"entityName":"ropeLight6","actionId":"deactivate","values":{}},{"entityName":"ropeLight7","actionId":"deactivate","values":{}},{"entityName":"ropeLight8","actionId":"deactivate","values":{}},{"entityName":"openAndClosedSign","actionId":"deactivate","values":{}},{"entityName":"openAndClosedSign2","actionId":"deactivate","values":{}},{"entityName":"openAndClosedSign3","actionId":"deactivate","values":{}},{"entityName":"openAndClosedSign5","actionId":"deactivate","values":{}},{"entityName":"openAndClosedSign6","actionId":"deactivate","values":{}},{"entityName":"openAndClosedSign4","actionId":"deactivate","values":{}}]}, createChannel(channelId, toggleButton14, channelBus))
script25.spawn(clickArea7, {"enabled":true,"onClickText":"Power Out","button":"POINTER"}, createChannel(channelId, clickArea7, channelBus))
script8.spawn(invisibleWall11, {"enabled":true}, createChannel(channelId, invisibleWall11, channelBus))
script12.spawn(toggleButton15, {"onActivate":[{"entityName":"clickArea7","actionId":"disable","values":{}},{"entityName":"invisibleWall11","actionId":"disable","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea7","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"clickArea8","actionId":"disable","values":{}},{"entityName":"invisibleWall12","actionId":"disable","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea8","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"clickArea21","actionId":"disable","values":{}},{"entityName":"invisibleWall25","actionId":"disable","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea21","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea9","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"clickArea9","actionId":"disable","values":{}},{"entityName":"indicatorArrow3","actionId":"activate","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"plainText12","x":0.2744784653186798,"y":0.47449642419815063,"z":0.9242790341377258,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"plainText13","x":0.2744784653186798,"y":0.47449642419815063,"z":0.9242790341377258,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"plainText15","x":0.2744784653186798,"y":0.47449642419815063,"z":0.9242790341377258,"curve":"linear","speed":10,"onComplete":[]}}],"onDeactivate":[{"entityName":"clickArea7","actionId":"enable","values":{}},{"entityName":"invisibleWall11","actionId":"enable","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea7","x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"clickArea8","actionId":"enable","values":{}},{"entityName":"invisibleWall12","actionId":"enable","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea8","x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"invisibleWall25","actionId":"enable","values":{}},{"entityName":"clickArea21","actionId":"enable","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"plainText12","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"plainText13","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"plainText15","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, toggleButton15, channelBus))
script25.spawn(clickArea8, {"enabled":true,"onClickText":"Power Out","button":"POINTER"}, createChannel(channelId, clickArea8, channelBus))
script8.spawn(invisibleWall12, {"enabled":true}, createChannel(channelId, invisibleWall12, channelBus))
script36.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"toggleButton6","actionId":"activate","values":{}}]}, createChannel(channelId, triggerArea, channelBus))
script36.spawn(triggerArea2, {"enabled":true,"onEnter":[{"entityName":"toggleButton6","actionId":"activate","values":{}}]}, createChannel(channelId, triggerArea2, channelBus))
script36.spawn(triggerArea3, {"enabled":true,"onEnter":[{"entityName":"toggleButton6","actionId":"activate","values":{}}]}, createChannel(channelId, triggerArea3, channelBus))
script36.spawn(triggerArea4, {"enabled":true,"onEnter":[{"entityName":"toggleButton6","actionId":"activate","values":{}}]}, createChannel(channelId, triggerArea4, channelBus))
script22.spawn(tablet2, {"text":"Dude, where did you go?  \nI thought the police caught me but turned out to be the \nDJ we saw yesterday blackout drunk.  \nRan right into me.  Our stuff went all over the ground.  \nAnyway, I am breaking into one of the sushi restaurants \nfor some to go food.  Want anything?","fontSize":36}, createChannel(channelId, tablet2, channelBus))
script31.spawn(plainText4, {"text":"#     #       #","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText4, channelBus))
script31.spawn(plainText5, {"text":"+ 3","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText5, channelBus))
script37.spawn(redAccessCard2, {"target":"invisibleWall9","respawns":false,"onUse":[{"entityName":"cyberpunkDoor","actionId":"open","values":{}},{"entityName":"invisibleWall9","actionId":"disable","values":{}},{"entityName":"clickArea5","actionId":"disable","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea5","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, redAccessCard2, channelBus))
script31.spawn(plainText6, {"text":"Lower City\nMaster Power Controls","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText6, channelBus))
script31.spawn(plainText7, {"text":"Master: On / Off","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText7, channelBus))
script31.spawn(plainText9, {"text":"Master Stage Controls","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText9, channelBus))
script28.spawn(indicatorArrow3, {"active":false}, createChannel(channelId, indicatorArrow3, channelBus))
script8.spawn(invisibleWall13, {"enabled":true}, createChannel(channelId, invisibleWall13, channelBus))
script8.spawn(invisibleWall14, {"enabled":true}, createChannel(channelId, invisibleWall14, channelBus))
script8.spawn(invisibleWall15, {"enabled":true}, createChannel(channelId, invisibleWall15, channelBus))
script8.spawn(invisibleWall16, {"enabled":true}, createChannel(channelId, invisibleWall16, channelBus))
script8.spawn(invisibleWall17, {"enabled":true}, createChannel(channelId, invisibleWall17, channelBus))
script8.spawn(invisibleWall18, {"enabled":true}, createChannel(channelId, invisibleWall18, channelBus))
script25.spawn(clickArea9, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Some trouble makers thought it would be funny to cut power to the lower city.  \nCan you help me restore order to the area?  \nLook for graffiti like you see next to me.  \nThat marks where they have been.  \nMaybe you can find some clues.","duration":10,"multiplayer":false}},{"entityName":"indicatorArrow","actionId":"activate","values":{}},{"entityName":"indicatorArrow3","actionId":"deactivate","values":{}},{"entityName":"policeCar","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea9, channelBus))
script25.spawn(clickArea10, {"enabled":true,"onClickText":"Tag","button":"POINTER","onClick":[{"entityName":"scoreboard","actionId":"decrease","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"graffiti8","x":0.5,"y":0.5,"z":0.5,"curve":"easeinoutbounce","speed":20,"onComplete":[]}},{"entityName":"clickArea10","actionId":"disable","values":{}}]}, createChannel(channelId, clickArea10, channelBus))
script25.spawn(clickArea11, {"enabled":true,"onClickText":"Tag","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"graffiti9","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"scoreboard","actionId":"decrease","values":{}},{"entityName":"clickArea11","actionId":"disable","values":{}}]}, createChannel(channelId, clickArea11, channelBus))
script25.spawn(clickArea12, {"enabled":true,"onClickText":"Tag","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"graffiti10","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"scoreboard","actionId":"decrease","values":{}},{"entityName":"clickArea12","actionId":"disable","values":{}}]}, createChannel(channelId, clickArea12, channelBus))
script25.spawn(clickArea13, {"enabled":true,"onClickText":"Tag","button":"POINTER","onClick":[{"entityName":"scoreboard","actionId":"decrease","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"graffiti11","x":0.3,"y":0.3,"z":0.3,"curve":"easeinoutbounce","speed":20,"onComplete":[]}},{"entityName":"clickArea13","actionId":"disable","values":{}}]}, createChannel(channelId, clickArea13, channelBus))
script25.spawn(clickArea14, {"enabled":true,"onClickText":"Tag","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"graffiti12","x":1.5,"y":1.5,"z":1.5,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"scoreboard","actionId":"decrease","values":{}},{"entityName":"clickArea14","actionId":"disable","values":{}}]}, createChannel(channelId, clickArea14, channelBus))
script25.spawn(clickArea15, {"enabled":true,"onClickText":"Offer from LT","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Hey Kid.  They call me LT.  I am a member of The Resistance\nGreat job down there.  You unraveled our work like it was nothing.\nWe thought it would take days for them to figure it out.\nI heard they promoted you to Citizen for your good deed.\nI can recognize an asset when I see one.\nWill you join us?","duration":10,"multiplayer":false}}]}, createChannel(channelId, clickArea15, channelBus))
script25.spawn(clickArea16, {"enabled":true,"onClickText":"Tag","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"graffiti13","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"scoreboard","actionId":"decrease","values":{}},{"entityName":"clickArea16","actionId":"disable","values":{}}]}, createChannel(channelId, clickArea16, channelBus))
script25.spawn(clickArea17, {"enabled":false,"onClickText":"Tags Left","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Your first task:\nSpread a specially coded message throughout the city. \nThrow up tags anywhere you see trash cans.\nOur agents will know what it means.\nI will keep track from up here.","duration":5,"multiplayer":false}}]}, createChannel(channelId, clickArea17, channelBus))
script2.spawn(openAndClosedSign4, {"startOn":true,"clickable":false}, createChannel(channelId, openAndClosedSign4, channelBus))
script31.spawn(plainText10, {"text":"Decline","font":"SF","color":"#0000FF"}, createChannel(channelId, plainText10, channelBus))
script31.spawn(plainText11, {"text":"Join","font":"SF","color":"#0000FF"}, createChannel(channelId, plainText11, channelBus))
script25.spawn(clickArea18, {"enabled":true,"onClickText":"Join the Resistance","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Your first task:\nSpread a specially coded message throughout the city. \nThrow up tags anywhere you see trash cans.\nOur agents will know what it means.\nI will keep track from up here.","duration":10,"multiplayer":false}},{"entityName":"toggleButton17","actionId":"activate","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea18","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea19","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea15","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"clickArea17","actionId":"enable","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"plainText10","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"plainText11","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, clickArea18, channelBus))
script25.spawn(clickArea19, {"enabled":true,"onClickText":"Decline","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Your loss.","duration":10,"multiplayer":false}}]}, createChannel(channelId, clickArea19, channelBus))
script8.spawn(invisibleWall19, {"enabled":true}, createChannel(channelId, invisibleWall19, channelBus))
script8.spawn(invisibleWall20, {"enabled":true}, createChannel(channelId, invisibleWall20, channelBus))
script8.spawn(invisibleWall21, {"enabled":true}, createChannel(channelId, invisibleWall21, channelBus))
script8.spawn(invisibleWall22, {"enabled":true}, createChannel(channelId, invisibleWall22, channelBus))
script8.spawn(invisibleWall23, {"enabled":true}, createChannel(channelId, invisibleWall23, channelBus))
script8.spawn(invisibleWall24, {"enabled":true}, createChannel(channelId, invisibleWall24, channelBus))
script12.spawn(toggleButton17, {"onActivate":[{"entityName":"invisibleWall24","actionId":"disable","values":{}},{"entityName":"invisibleWall23","actionId":"disable","values":{}},{"entityName":"invisibleWall22","actionId":"disable","values":{}},{"entityName":"invisibleWall21","actionId":"disable","values":{}},{"entityName":"invisibleWall20","actionId":"disable","values":{}},{"entityName":"invisibleWall19","actionId":"disable","values":{}}]}, createChannel(channelId, toggleButton17, channelBus))
script38.spawn(telephoneBooth, {"clickable":true}, createChannel(channelId, telephoneBooth, channelBus))
script38.spawn(telephoneBooth2, {"clickable":false}, createChannel(channelId, telephoneBooth2, channelBus))
script39.spawn(horizontalPlatform, {"distance":10,"speed":1,"autoStart":false,"onReachEnd":[{"entityName":"horizontalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"horizontalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, horizontalPlatform, channelBus))
script16.spawn(verticalBlackPad4, {"distance":25,"speed":2,"autoStart":false,"onReachEnd":[{"entityName":"toggleButton19","actionId":"deactivate","values":{}}],"onReachStart":[{"entityName":"toggleButton19","actionId":"deactivate","values":{}}]}, createChannel(channelId, verticalBlackPad4, channelBus))
script12.spawn(toggleButton19, {"onActivate":[{"entityName":"verticalBlackPad4","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"verticalBlackPad4","actionId":"goToStart","values":{}}]}, createChannel(channelId, toggleButton19, channelBus))
script16.spawn(verticalBlackPad5, {"distance":17,"speed":2,"autoStart":false,"onReachEnd":[{"entityName":"toggleButton20","actionId":"deactivate","values":{}}],"onReachStart":[{"entityName":"toggleButton20","actionId":"deactivate","values":{}}]}, createChannel(channelId, verticalBlackPad5, channelBus))
script12.spawn(toggleButton20, {"onActivate":[{"entityName":"verticalBlackPad5","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"verticalBlackPad5","actionId":"goToStart","values":{}}]}, createChannel(channelId, toggleButton20, channelBus))
script16.spawn(verticalBlackPad6, {"distance":40,"speed":2,"autoStart":false,"onReachEnd":[{"entityName":"toggleButton21","actionId":"deactivate","values":{}}],"onReachStart":[{"entityName":"toggleButton21","actionId":"deactivate","values":{}}]}, createChannel(channelId, verticalBlackPad6, channelBus))
script12.spawn(toggleButton21, {"onActivate":[{"entityName":"verticalBlackPad6","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"verticalBlackPad6","actionId":"goToStart","values":{}}]}, createChannel(channelId, toggleButton21, channelBus))
script27.spawn(ambientSound9, {"sound":"Birds","active":true,"loop":true}, createChannel(channelId, ambientSound9, channelBus))
script19.spawn(imageCubeC13, {"image":"https://i.imgur.com/V7qigoGl.jpeg"}, createChannel(channelId, imageCubeC13, channelBus))
script19.spawn(imageCubeC15, {"image":"https://i.imgur.com/Wt9wvAal.png"}, createChannel(channelId, imageCubeC15, channelBus))
script19.spawn(imageCubeC16, {"image":"https://i.imgur.com/y9ITMnSl.jpg"}, createChannel(channelId, imageCubeC16, channelBus))
script19.spawn(imageCubeC17, {"image":"https://i.imgur.com/4Tx8GbRl.jpeg"}, createChannel(channelId, imageCubeC17, channelBus))
script19.spawn(imageCubeC18, {"image":"https://i.imgur.com/CZRp7Lql.jpeg"}, createChannel(channelId, imageCubeC18, channelBus))
script19.spawn(imageCubeC19, {"image":"https://i.imgur.com/dTLW5TKl.jpg"}, createChannel(channelId, imageCubeC19, channelBus))
script17.spawn(imageCubeB14, {"image":"https://i.imgur.com/cKtw2y2l.png"}, createChannel(channelId, imageCubeB14, channelBus))
script17.spawn(imageCubeB18, {"image":"https://i.imgur.com/BbVqDNCs.png"}, createChannel(channelId, imageCubeB18, channelBus))
script17.spawn(imageCubeB19, {"image":"https://i.imgur.com/601LooEs.jpg"}, createChannel(channelId, imageCubeB19, channelBus))
script19.spawn(imageCubeC21, {"image":"https://i.imgur.com/XNRuD5Xl.png"}, createChannel(channelId, imageCubeC21, channelBus))
script10.spawn(ropeLight9, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight9, channelBus))
script10.spawn(ropeLight10, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight10, channelBus))
script10.spawn(ropeLight11, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight11, channelBus))
script10.spawn(ropeLight13, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight13, channelBus))
script10.spawn(ropeLight14, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight14, channelBus))
script15.spawn(rainLight2, {"startOn":true,"clickable":false}, createChannel(channelId, rainLight2, channelBus))
script19.spawn(imageCubeC14, {"image":"https://i.imgur.com/Lkog8bzs.jpeg"}, createChannel(channelId, imageCubeC14, channelBus))
script7.spawn(imageComputerScreen6, {"image":"https://i.imgur.com/B5XVlvPs.png"}, createChannel(channelId, imageComputerScreen6, channelBus))
script7.spawn(imageComputerScreen8, {"image":"https://i.imgur.com/quFYW9xs.png"}, createChannel(channelId, imageComputerScreen8, channelBus))
script7.spawn(imageComputerScreen9, {"image":"https://i.imgur.com/uKwapwFs.jpeg"}, createChannel(channelId, imageComputerScreen9, channelBus))
script16.spawn(verticalBlackPad7, {"distance":22,"speed":2,"autoStart":false,"onReachEnd":[{"entityName":"toggleButton22","actionId":"deactivate","values":{}}],"onReachStart":[{"entityName":"toggleButton22","actionId":"deactivate","values":{}}]}, createChannel(channelId, verticalBlackPad7, channelBus))
script12.spawn(toggleButton22, {"onActivate":[{"entityName":"verticalBlackPad7","actionId":"goToEnd","values":{}}],"onDeactivate":[{"entityName":"verticalBlackPad7","actionId":"goToStart","values":{}}]}, createChannel(channelId, toggleButton22, channelBus))
script7.spawn(imageComputerScreen10, {"image":"https://i.imgur.com/045s9tys.mp4"}, createChannel(channelId, imageComputerScreen10, channelBus))
script7.spawn(imageComputerScreen11, {"image":"https://i.imgur.com/9DoVoixs.jpg"}, createChannel(channelId, imageComputerScreen11, channelBus))
script7.spawn(imageComputerScreen12, {"image":"https://i.imgur.com/dDRuMIqs.png"}, createChannel(channelId, imageComputerScreen12, channelBus))
script7.spawn(imageComputerScreen13, {"image":"https://i.imgur.com/B5XVlvPs.png"}, createChannel(channelId, imageComputerScreen13, channelBus))
script7.spawn(imageComputerScreen14, {"image":"https://i.imgur.com/8NGbEsCs.png"}, createChannel(channelId, imageComputerScreen14, channelBus))
script7.spawn(imageComputerScreen15, {"image":"https://i.imgur.com/nWrXWAWs.jpeg"}, createChannel(channelId, imageComputerScreen15, channelBus))
script19.spawn(imageCubeC23, {"image":"https://i.imgur.com/dIgyu09l.png"}, createChannel(channelId, imageCubeC23, channelBus))
script1.spawn(cyberpunkDoor2, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor2","actionId":"toggle","values":{}}],"onOpen":[],"onClose":[]}, createChannel(channelId, cyberpunkDoor2, channelBus))
script19.spawn(imageCubeC24, {"image":"https://i.imgur.com/EbzsUVol.jpg"}, createChannel(channelId, imageCubeC24, channelBus))
script25.spawn(clickArea21, {"enabled":true,"onClickText":"Power Out","button":"POINTER"}, createChannel(channelId, clickArea21, channelBus))
script8.spawn(invisibleWall25, {"enabled":true}, createChannel(channelId, invisibleWall25, channelBus))
script8.spawn(invisibleWall26, {"enabled":true}, createChannel(channelId, invisibleWall26, channelBus))
script1.spawn(cyberpunkDoor3, {"onClickText":"Open/Close","onClick":[{"entityName":"cyberpunkDoor3","actionId":"toggle","values":{}}]}, createChannel(channelId, cyberpunkDoor3, channelBus))
script40.spawn(scifiChest6, {"onClickText":"Open/Close","onClick":[{"entityName":"scifiChest6","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest6, channelBus))
script40.spawn(scifiChest7, {"onClickText":"Open/Close","onClick":[{"entityName":"scifiChest7","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest7, channelBus))
script40.spawn(scifiChest8, {"onClickText":"Open/Close","onClick":[{"entityName":"scifiChest8","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest8, channelBus))
script40.spawn(scifiChest11, {"onClickText":"Open/Close","onClick":[{"entityName":"scifiChest11","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest11, channelBus))
script40.spawn(scifiChest13, {"onClickText":"Open/Close","onClick":[{"entityName":"scifiChest13","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest13, channelBus))
script40.spawn(scifiChest15, {"onClickText":"Open/Close","onClick":[{"entityName":"scifiChest15","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest15, channelBus))
script40.spawn(scifiChest17, {"onClickText":"Open/Close","onClick":[{"entityName":"scifiChest17","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest17, channelBus))
script40.spawn(scifiChest19, {"onClickText":"Open/Close","onClick":[{"entityName":"scifiChest19","actionId":"toggle","values":{}}]}, createChannel(channelId, scifiChest19, channelBus))
script41.spawn(faceAccessCard, {"target":"invisibleWall27","respawns":false,"onUse":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea23","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":20,"onComplete":[]}},{"entityName":"clickArea23","actionId":"disable","values":{}},{"entityName":"invisibleWall27","actionId":"disable","values":{}},{"entityName":"toolbox5","actionId":"print","values":{"message":"Access Granted.  Welcome, Citizen!","duration":5,"multiplayer":false}}]}, createChannel(channelId, faceAccessCard, channelBus))
script25.spawn(clickArea22, {"enabled":true,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Great work restoring power to the lower city.\nAs a thank you we have promoted your status to Citizen.\nHere is your official ID card.  This will give you access to the upper city.","duration":10,"multiplayer":false}},{"entityName":"indicatorArrow3","actionId":"deactivate","values":{}},{"entityName":"policeCar","actionId":"activate","values":{}},{"entityName":"faceAccessCard","actionId":"equip","values":{}}]}, createChannel(channelId, clickArea22, channelBus))
script8.spawn(invisibleWall27, {"enabled":true}, createChannel(channelId, invisibleWall27, channelBus))
script25.spawn(clickArea23, {"enabled":true,"onClickText":"Citizens Only","button":"POINTER"}, createChannel(channelId, clickArea23, channelBus))
script8.spawn(invisibleWall28, {"enabled":true}, createChannel(channelId, invisibleWall28, channelBus))
script8.spawn(invisibleWall29, {"enabled":true}, createChannel(channelId, invisibleWall29, channelBus))
script25.spawn(clickArea24, {"enabled":true,"onClickText":"It's for you","button":"POINTER","onClick":[{"entityName":"telephoneBooth2","actionId":"activate","values":{}},{"entityName":"toolbox5","actionId":"print","values":{"message":"We need you to come in.  \nWe have a regional office in the bus stop building.\nThe access code is rotating.  It can be found\nas the high score on one of the arcade games.  \nPlayer name “Artemis”.  Their score will be the code.\nSee you soon.","duration":10,"multiplayer":false}},{"entityName":"toolbox5","actionId":"move","values":{"target":"plainText12","x":1.2539371490478517,"y":1.665738582611084,"z":19.987470626831055,"curve":"linear","speed":10,"relative":false,"onComplete":[]}},{"entityName":"toolbox5","actionId":"move","values":{"target":"plainText15","x":1.3539371490478516,"y":1.665738582611084,"z":19.987470626831055,"curve":"linear","speed":10,"relative":false,"onComplete":[]}}]}, createChannel(channelId, clickArea24, channelBus))
script8.spawn(invisibleWall30, {"enabled":true}, createChannel(channelId, invisibleWall30, channelBus))
script25.spawn(clickArea25, {"enabled":true,"onClickText":"Out of Order","button":"POINTER"}, createChannel(channelId, clickArea25, channelBus))
script31.spawn(plainText12, {"text":"High Scores\nmpchester...9678\nplayer1........5678\nghostwire....2342","font":"SF_Heavy","color":"#000080"}, createChannel(channelId, plainText12, channelBus))
script31.spawn(plainText13, {"text":"High Scores\ndcGod.........9999\nein...............7578\namyrhoo......3345","font":"SF_Heavy","color":"#000080"}, createChannel(channelId, plainText13, channelBus))
script7.spawn(imageComputerScreen16, {"image":"https://i.imgur.com/hIH8fiPs.jpeg"}, createChannel(channelId, imageComputerScreen16, channelBus))
script7.spawn(imageComputerScreen17, {"image":"https://i.imgur.com/9R7YfBhs.png"}, createChannel(channelId, imageComputerScreen17, channelBus))
script7.spawn(imageComputerScreen18, {"image":"https://i.imgur.com/nWrXWAWs.jpeg"}, createChannel(channelId, imageComputerScreen18, channelBus))
script40.spawn(scifiChest21, {"onClickText":"Open/Close","onClick":[{"entityName":"scifiChest21","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Use this to gain access to Black Building\nMake sure to look for anything else useful while in there","duration":5,"multiplayer":false}}]}, createChannel(channelId, scifiChest21, channelBus))
script40.spawn(scifiChest22, {"onClickText":"Open/Close","onClick":[{"entityName":"scifiChest22","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Use Yellow Data Drive to install backdoor software on government computers","duration":5,"multiplayer":false}}]}, createChannel(channelId, scifiChest22, channelBus))
script42.spawn(imageFromURL, {"image":"https://i.imgur.com/SYNelUAl.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script43.spawn(invisibleRamp2, {"enabled":true}, createChannel(channelId, invisibleRamp2, channelBus))
script42.spawn(imageFromURL2, {"image":"https://i.imgur.com/XUSrXHOl.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script42.spawn(imageFromURL4, {"image":"https://i.imgur.com/vRbR4fVl.jpg"}, createChannel(channelId, imageFromURL4, channelBus))
script42.spawn(imageFromURL3, {"image":"https://i.imgur.com/zTEFJ9Bl.jpeg"}, createChannel(channelId, imageFromURL3, channelBus))
script42.spawn(imageFromURL5, {"image":"https://i.imgur.com/i6lh6rOl.jpg"}, createChannel(channelId, imageFromURL5, channelBus))
script42.spawn(imageFromURL6, {"image":"https://i.imgur.com/i6lh6rOl.jpg"}, createChannel(channelId, imageFromURL6, channelBus))
script27.spawn(ambientSound8, {"sound":"Birds","active":true,"loop":true}, createChannel(channelId, ambientSound8, channelBus))
script10.spawn(ropeLight12, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight12, channelBus))
script10.spawn(ropeLight15, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight15, channelBus))
script42.spawn(imageFromURL7, {"image":"https://i.imgur.com/xQJ7CT0l.mp4"}, createChannel(channelId, imageFromURL7, channelBus))
script42.spawn(imageFromURL8, {"image":"https://i.imgur.com/KEikr0ss.mp4"}, createChannel(channelId, imageFromURL8, channelBus))
script42.spawn(imageFromURL9, {"image":"https://i.imgur.com/FdaK95ts.mp4"}, createChannel(channelId, imageFromURL9, channelBus))
script42.spawn(imageFromURL10, {"image":"https://i.imgur.com/VtgwSAcs.jpeg"}, createChannel(channelId, imageFromURL10, channelBus))
script42.spawn(imageFromURL11, {"image":"https://i.imgur.com/7TJcnY2s.png"}, createChannel(channelId, imageFromURL11, channelBus))
script42.spawn(imageFromURL12, {"image":"https://i.imgur.com/LFBkSxus.png"}, createChannel(channelId, imageFromURL12, channelBus))
script42.spawn(imageFromURL13, {"image":"https://i.imgur.com/3irbI72s.mp4"}, createChannel(channelId, imageFromURL13, channelBus))
script42.spawn(imageFromURL14, {"image":"https://i.imgur.com/KEikr0ss.mp4"}, createChannel(channelId, imageFromURL14, channelBus))
script42.spawn(imageFromURL15, {"image":"https://i.imgur.com/wpk6g7Ol.jpg"}, createChannel(channelId, imageFromURL15, channelBus))
script42.spawn(imageFromURL16, {"image":"https://i.imgur.com/BMbv0Ocs.png"}, createChannel(channelId, imageFromURL16, channelBus))
script42.spawn(imageFromURL18, {"image":"https://i.imgur.com/ssSdKjls.mp4"}, createChannel(channelId, imageFromURL18, channelBus))
script34.spawn(padlock, {"combination":4631,"onSolve":[{"entityName":"invisibleWall4","actionId":"disable","values":{}},{"entityName":"clickArea26","actionId":"disable","values":{}},{"entityName":"cyberpunkDoor3","actionId":"open","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea26","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, padlock, channelBus))
script8.spawn(invisibleWall4, {"enabled":true}, createChannel(channelId, invisibleWall4, channelBus))
script25.spawn(clickArea26, {"enabled":true,"onClickText":"Closet Locked","button":"POINTER"}, createChannel(channelId, clickArea26, channelBus))
script36.spawn(triggerArea5, {"enabled":true,"onEnter":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Welcome to the Resistance Base\n\nWe have a plan to take the fight to the government. \nInfecting their computers with a backdoor gain us what we need.\n\nWith your new status as Citizen, you are in the position to do it.\n\nYou will find what you need in the cabinets over there.","duration":15,"multiplayer":false}},{"entityName":"triggerArea5","actionId":"disable","values":{}}]}, createChannel(channelId, triggerArea5, channelBus))
script36.spawn(triggerArea6, {"enabled":true,"onEnter":[{"entityName":"cyberpunkDoor3","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea6, channelBus))
script44.spawn(fingerprintAccessC, {"target":"invisibleWall31","respawns":false,"onEquip":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Black Building Access ID Chip","duration":5,"multiplayer":false}},{"entityName":"invisibleWall37","actionId":"disable","values":{}},{"entityName":"invisibleWall38","actionId":"disable","values":{}},{"entityName":"invisibleWall39","actionId":"disable","values":{}},{"entityName":"invisibleWall40","actionId":"disable","values":{}}],"onUse":[{"entityName":"invisibleWall31","actionId":"disable","values":{}}]}, createChannel(channelId, fingerprintAccessC, channelBus))
script8.spawn(invisibleWall31, {"enabled":true}, createChannel(channelId, invisibleWall31, channelBus))
script35.spawn(keyboard2, {"onClick":[{"entityName":"yellowAccessCard2","actionId":"use","values":{}},{"entityName":"invisibleWall35","actionId":"enable","values":{}}]}, createChannel(channelId, keyboard2, channelBus))
script35.spawn(keyboard3, {"onClick":[{"entityName":"yellowAccessCard2","actionId":"use","values":{}},{"entityName":"invisibleWall36","actionId":"enable","values":{}}]}, createChannel(channelId, keyboard3, channelBus))
script20.spawn(scoreboard2, {"initialVal":3,"threshold":0,"enabled":true,"onThreshold":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Great Job.  All computers infected.\nReturn to the resistance to base.\n","duration":10,"multiplayer":false}},{"entityName":"clickArea29","actionId":"enable","values":{}}]}, createChannel(channelId, scoreboard2, channelBus))
script25.spawn(clickArea27, {"enabled":false,"onClickText":"Interact","button":"POINTER","onClick":[{"entityName":"cyberpunkDoor","actionId":"open","values":{}}]}, createChannel(channelId, clickArea27, channelBus))
script35.spawn(keyboard4, {"onClick":[{"entityName":"yellowAccessCard2","actionId":"use","values":{}},{"entityName":"invisibleWall33","actionId":"enable","values":{}}]}, createChannel(channelId, keyboard4, channelBus))
script25.spawn(clickArea28, {"enabled":true,"onClickText":"Computers Left To Infect","button":"POINTER"}, createChannel(channelId, clickArea28, channelBus))
script25.spawn(clickArea29, {"enabled":false,"onClickText":"Return Yellow Data When Done","button":"POINTER","onClick":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Congratulations!  Mission Accomplished!\n\nThe Resistance thanks you for playing.\nThey can bring the fight to the heart of the government now.\n\nStay tuned for more missions in the future.\nPlease continue to explore the city.","duration":5,"multiplayer":false}},{"entityName":"clickArea29","actionId":"enable","values":{}}]}, createChannel(channelId, clickArea29, channelBus))
script35.spawn(keyboard5, {}, createChannel(channelId, keyboard5, channelBus))
script31.spawn(plainText15, {"text":"High Scores\nmpchester...9678\nartemis........4631\nghostwire....2342","font":"SF_Heavy","color":"#000080"}, createChannel(channelId, plainText15, channelBus))
script7.spawn(imageComputerScreen19, {"image":"https://i.imgur.com/KqqZOLis.jpg"}, createChannel(channelId, imageComputerScreen19, channelBus))
script42.spawn(imageFromURL17, {"image":"https://i.imgur.com/KqqZOLis.jpg"}, createChannel(channelId, imageFromURL17, channelBus))
script7.spawn(imageComputerScreen20, {"image":"https://i.imgur.com/KqqZOLis.jpg"}, createChannel(channelId, imageComputerScreen20, channelBus))
script42.spawn(imageFromURL19, {"image":"https://i.imgur.com/KqqZOLis.jpg"}, createChannel(channelId, imageFromURL19, channelBus))
script8.spawn(invisibleWall32, {"enabled":false}, createChannel(channelId, invisibleWall32, channelBus))
script42.spawn(imageFromURL20, {"image":"https://i.imgur.com/KqqZOLis.jpg"}, createChannel(channelId, imageFromURL20, channelBus))
script7.spawn(imageComputerScreen21, {"image":"https://i.imgur.com/KqqZOLis.jpg"}, createChannel(channelId, imageComputerScreen21, channelBus))
script1.spawn(cyberpunkDoor4, {"onClickText":"Secure Building","onClick":[{"entityName":"cyberpunkDoor4","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"scoreboard3","actionId":"decrease","values":{}}],"onClose":[{"entityName":"scoreboard3","actionId":"increase","values":{}}]}, createChannel(channelId, cyberpunkDoor4, channelBus))
script1.spawn(cyberpunkDoor5, {"onClickText":"Secure Building","onClick":[{"entityName":"cyberpunkDoor5","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"scoreboard3","actionId":"decrease","values":{}}],"onClose":[{"entityName":"scoreboard3","actionId":"increase","values":{}}]}, createChannel(channelId, cyberpunkDoor5, channelBus))
script1.spawn(cyberpunkDoor7, {"onClickText":"Secure Building","onClick":[{"entityName":"cyberpunkDoor7","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"scoreboard3","actionId":"decrease","values":{}}],"onClose":[{"entityName":"scoreboard3","actionId":"increase","values":{}}]}, createChannel(channelId, cyberpunkDoor7, channelBus))
script1.spawn(cyberpunkDoor6, {"onClickText":"Secure Building","onClick":[{"entityName":"cyberpunkDoor6","actionId":"toggle","values":{}}],"onOpen":[{"entityName":"scoreboard3","actionId":"decrease","values":{}}],"onClose":[{"entityName":"scoreboard3","actionId":"increase","values":{}}]}, createChannel(channelId, cyberpunkDoor6, channelBus))
script42.spawn(imageFromURL21, {"image":"https://i.imgur.com/Lkog8bzs.jpeg"}, createChannel(channelId, imageFromURL21, channelBus))
script42.spawn(imageFromURL22, {"image":"https://i.imgur.com/Lkog8bzs.jpeg"}, createChannel(channelId, imageFromURL22, channelBus))
script8.spawn(invisibleWall33, {"enabled":false}, createChannel(channelId, invisibleWall33, channelBus))
script8.spawn(invisibleWall34, {"enabled":true}, createChannel(channelId, invisibleWall34, channelBus))
script25.spawn(clickArea20, {"enabled":true,"onClickText":"Restricted Area","button":"POINTER"}, createChannel(channelId, clickArea20, channelBus))
script44.spawn(fingerprintAccessC2, {"target":"invisibleWall34","respawns":false,"onEquip":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Restricted Areas Access ID Chip","duration":5,"multiplayer":false}},{"entityName":"invisibleWall34","actionId":"disable","values":{}},{"entityName":"clickArea20","actionId":"disable","values":{}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"clickArea20","x":0.01,"y":0.01,"z":0.01,"curve":"linear","speed":10,"onComplete":[]}}],"onUse":[{"entityName":"invisibleWall34","actionId":"disable","values":{}}]}, createChannel(channelId, fingerprintAccessC2, channelBus))
script8.spawn(invisibleWall35, {"enabled":false}, createChannel(channelId, invisibleWall35, channelBus))
script8.spawn(invisibleWall36, {"enabled":false}, createChannel(channelId, invisibleWall36, channelBus))
script25.spawn(clickArea30, {"enabled":true,"onClickText":"Cheat - Get All Access Cards","button":"POINTER","onClick":[{"entityName":"yellowAccessCard2","actionId":"equip","values":{}},{"entityName":"faceAccessCard","actionId":"equip","values":{}},{"entityName":"fingerprintAccessC","actionId":"equip","values":{}},{"entityName":"redAccessCard2","actionId":"equip","values":{}},{"entityName":"toolbox5","actionId":"print","values":{"message":"Cheater Cheater Pumpkin Eater","duration":5,"multiplayer":false}},{"entityName":"blueAccessCard","actionId":"equip","values":{}}]}, createChannel(channelId, clickArea30, channelBus))
script20.spawn(scoreboard3, {"initialVal":4,"threshold":0,"enabled":true,"onThreshold":[{"entityName":"toolbox5","actionId":"print","values":{"message":"Building Secure","duration":5,"multiplayer":false}},{"entityName":"toolbox5","actionId":"scale","values":{"target":"toggleButton22","x":1,"y":1,"z":1,"curve":"linear","speed":20,"onComplete":[]}}]}, createChannel(channelId, scoreboard3, channelBus))
script8.spawn(invisibleWall37, {"enabled":true}, createChannel(channelId, invisibleWall37, channelBus))
script8.spawn(invisibleWall38, {"enabled":true}, createChannel(channelId, invisibleWall38, channelBus))
script8.spawn(invisibleWall39, {"enabled":true}, createChannel(channelId, invisibleWall39, channelBus))
script8.spawn(invisibleWall40, {"enabled":true}, createChannel(channelId, invisibleWall40, channelBus))
script36.spawn(triggerArea7, {"enabled":true,"onEnter":[{"entityName":"toolbox5","actionId":"scale","values":{"target":"toggleButton22","x":0,"y":0,"z":0,"curve":"linear","speed":19,"onComplete":[]}},{"entityName":"triggerArea7","actionId":"disable","values":{}}]}, createChannel(channelId, triggerArea7, channelBus))
script31.spawn(plainText8, {"text":"To Enter\nLockdown\nBuilding First\n","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText8, channelBus))
scriptArcade1.spawn(arcadeMachineBlack2, {}, createChannel(channelId, arcadeMachineBlack2, channelBus))
scriptBar1.spawn(barHost1, {}, createChannel(channelId, barHost1, channelBus))
scriptBar2.spawn(barHost2, {}, createChannel(channelId, barHost2, channelBus))
scriptBar3.spawn(barHost3, {}, createChannel(channelId, barHost3, channelBus))
scriptBar4.spawn(barHost4, {}, createChannel(channelId, barHost4, channelBus))

/*
// Instance the input object
const input = Input.instance

log("registing debug button down helper" )
//debug helper for where to place things
input.subscribe('BUTTON_DOWN', ActionButton.POINTER, true, (event) => {
  log("event.hit.hitpoint " + event.hit.hitPoint  + " " + "event.hit.normal " + event.hit.normal )
}
*/
