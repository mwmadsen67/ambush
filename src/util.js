
export const randomVec = (length) => {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length)
};

export const vecBtwPts = (pos1, pos2, n) => {
  const angle = Math.atan2(pos2[1] - pos1[1], pos2[0] - pos1[0]);
  return scale([Math.cos(angle), Math.sin(angle)], n);
}

export const scale = (vec, m) => [vec[0] * m, vec[1] * m];

export const dist = (pos1, pos2) => Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2);