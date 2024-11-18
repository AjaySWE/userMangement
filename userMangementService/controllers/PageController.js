const Page = require("../models/Page");

class PageController {
  static async createPage(req, res, next) {
    try {
      const page = await Page.create(req.body);
      res.status(201).json({ message: "Page created successfully", page });
    } catch (error) {
      next(error);
    }
  }

  static async getPages(req, res, next) {
    try {
      const pages = await Page.findAll({ include: ["Module"] }); // Include associated module
      res.status(200).json(pages);
    } catch (error) {
      next(error);
    }
  }

  static async updatePage(req, res, next) {
    try {
      const { id } = req.params;
      const page = await Page.findByPk(id);
      if (!page) throw new Error("Page not found.");
      await page.update(req.body);
      res.status(200).json({ message: "Page updated successfully", page });
    } catch (error) {
      next(error);
    }
  }

  static async deletePage(req, res, next) {
    try {
      const { id } = req.params;
      const page = await Page.findByPk(id);
      if (!page) throw new Error("Page not found.");
      await page.destroy();
      res.status(200).json({ message: "Page deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PageController;
