export type Props = {}

//import { GameManager } from "./gameManager"
const materialCache: Record<string, Material> = {};

export const getOrLoadMaterial = function(url){
      log(".getOrCreateMaterial "+url);
      let QRMaterial : Material = null;

      QRMaterial = materialCache[url];
      if(!QRMaterial){
        let QRTexture = new Texture(url+"?cache=")
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

    host.getOrLoadMaterial=getOrLoadMaterial;
  }
}
