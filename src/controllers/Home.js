class Home {
  index(req, res) {
    res.json({
      working: true,
    });
  }
}

export default new Home();
