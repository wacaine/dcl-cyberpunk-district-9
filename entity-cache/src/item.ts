export type Props = {}

//import { GameManager } from "./gameManager"
const materialCache: Record<string, Material> = {};
const shapeCache: Record<string, Shape> = {};

export const getOrLoadMaterial = function(url){
      log(".getOrCreateMaterial "+url);
      let QRMaterial : Material = null;

      QRMaterial = materialCache[url];
      if(!QRMaterial){
        let QRTexture = new Texture(url)
         QRMaterial = new Material()
        QRMaterial.metallic = 0
        QRMaterial.roughness = 1
        QRMaterial.specularIntensity = 0
        QRMaterial.albedoTexture = QRTexture

        materialCache[url] = QRMaterial;

        log("getOrCreateMaterial CACHE MISS "+url);
      }else{
        log("getOrCreateMaterial CACHE HIT "+url + " " + QRMaterial);
      }
      return QRMaterial;
    }

export const getOrLoadPrimitiveShapeByName = function(shapeName){
      log(".getOrLoadPrimitiveShapeByName "+shapeName);
      let shape : Shape = null;

      shape = shapeCache[shapeName];
      if(!shape){
        switch(shapeName){
          case "PlaneShape":
              shape = new PlaneShape();
              break;
          default:
              break;
        }
        shapeCache[shapeName] = shape;
        log("getOrLoadPrimitiveShapeByName CACHE MISS "+shapeName);
      }else{
        log("getOrLoadPrimitiveShapeByName CACHE HIT "+shapeName + " " + shape);
      }
      return shape;
    }

export default class ImageCache implements IScript<Props> {
  //container: UIContainerStack
  //materialCache: Record<string, Material> = {}
  //materialCache = {}

  init() {
    //engine.addSystem(this.tweenSystem)
    //engine.addSystem(this.delaySystem)
    //this['materialCache']=this.materialCache
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    //host.materialCache=this.materialCache;

    //const materialCache = this.materialCache;
    //assign method to Entity so it can be called later
    //this is my workaround to add methods without imports
    //compiler WARNS but lets it work
    host.getOrLoadMaterial=getOrLoadMaterial;
  }
}
