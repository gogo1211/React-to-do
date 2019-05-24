const UPDATE_SKILLS = '[SKILLS] Update skills';

export function updatSkill(payload) {
  return {
    type: UPDATE_SKILLS,
    payload,
  };
}
