import { sendResponse } from "#utils/response";

class Controller {
  static Service = null;

  static async get(req, res, next) {
    const { id } = req.params;
    const data = await this.Service.get(id, req.query);
    sendResponse(httpStatus.OK, res, data, "Record fetched successfully");
  }

  static async create(req, res, next) {
    const data = await this.Service.create(req.body);
    sendResponse(httpStatus.CREATED, res, data, "Record created successfully");
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const data = await this.Service.update(id, req.body);
    sendResponse(httpStatus.OK, res, data, "Record updated successfully");
  }

  static async deleteDoc(req, res, next) {
    const { id } = req.params;
    const data = await this.Service.deleteDoc(id);
    sendResponse(httpStatus.OK, res, data, "Record deleted successfully");
  }
}

export default Controller;
