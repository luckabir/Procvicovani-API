exports.listSubdivisions = async (req, res) => {
    const {countryCode} = req.params;
    const subdivisions = await commerce.services.localeListSubdivisions(countryCode);
    res.json(subdivisions);
};