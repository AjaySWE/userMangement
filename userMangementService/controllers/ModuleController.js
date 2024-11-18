const Module = require("../models/Module");

class ModuleController {
  static async createModule(req, res, next) {
    try {
      const module = await Module.create(req.body);
      res.status(201).json({ message: "Module created successfully", module });
    } catch (error) {
      next(error);
    }
  }

  static async getModules(req, res, next) {
    try {
      const modules = await Module.findAll();
      res.status(200).json(modules);
    } catch (error) {
      next(error);
    }
  }

  static async updateModule(req, res, next) {
    try {
      const { id } = req.params;
      const module = await Module.findByPk(id);
      if (!module) throw new Error("Module not found.");
      await module.update(req.body);
      res.status(200).json({ message: "Module updated successfully", module });
    } catch (error) {
      next(error);
    }
  }

  static async deleteModule(req, res, next) {
    try {
      const { id } = req.params;
      const module = await Module.findByPk(id);
      if (!module) throw new Error("Module not found.");
      await module.destroy();
      res.status(200).json({ message: "Module deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ModuleController;
