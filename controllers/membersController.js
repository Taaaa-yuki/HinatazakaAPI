exports.getMembers = (req, res) => {
  const { name, birthdate, bloodType, height } = req.query;
  const filteredMembers = members.filter((m) => {
    return (!name || m.name.includes(name)) &&
      (!birthdate || m.birthdate === birthdate) &&
      (!bloodType || m.bloodType === bloodType) &&
      (!height || m.height === height) &&
      (!birthplace || m.birthplace === birthplace);
  });
  if (filteredMembers.length === 0) {
    res.status(404).json({ message: 'Members not found' });
  } else {
    res.json(filteredMembers);
  }
};
