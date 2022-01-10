import {Router} from 'express'
import * as productCtrl from '../controllers/products.controllers'
import {authJWT} from '../middlewares/index'
const router = Router();


router.post("/",[authJWT.verify, authJWT.isModify],productCtrl.createProduct);
router.get("/",productCtrl.getProducts);
router.get("/:productById",productCtrl.getProductById);
router.put("/:productById",productCtrl.updateProductById);
router.delete("/:productById",[authJWT.verify, authJWT.isModify],productCtrl.deleteProductById);

export default router;