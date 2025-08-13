import { v4 as uuid } from "uuid";

export const notsReducer = (state, { type, payload }) => {
	// console.log("hello", state.notes.find((i) => i.id === payload.id));
	// console.log(payload.id);
	
	
	switch (type) {
		case "TITLE":
			return {
				...state,
				title: payload,
			};
		case "TEXT":
			return {
				...state,
				text: payload,
			};
		case "ADD_NOTE":
			return {
				...state,
				notes: [
					...state.notes,
					{ text: state.text, title: state.title, id: uuid(), isPinned: false },
				],
			};
		case "CLEAR":
			return {
				...state,
				text: "",
				title: " ",
			};
		case "PIN":
			return {
				...state,
				notes: state.notes.map((note) =>
					note.id === payload.id ? { ...note, isPinned: true } : note
				),
			};
		case "UNPIN":
			return {
				...state,
				notes: state.notes.map((note) =>
					note.id === payload.id ? { ...note, isPinned: false } : note
				),
			};
		case "ARCHIVE":
			return {
				...state,
				archive: [
					...state.archive,
					state.notes.find(({ id }) => id === payload.id),
				],
				notes: state.notes.filter(({ id }) => id !== payload.id)
			};
		case "REMOVE_FROM_ARCHIVE":
			return {
				...state,
				notes: [...state.notes, state.archive.find(({ id }) => id === payload.id)],
				archive: state.archive.filter(({ id }) => id !== payload.id)
			}
		case "BIN":
			return {
				...state,
				bin: [
					...state.bin,
					state.notes.find(({ id }) => id === payload.id)
				],
				notes: state.notes.filter(({ id }) => id !== payload.id)
			};
		case "REMOVE_FROM_BIN":
			return {
				notes: [...state.notes, state.bin.find(({ id }) => id === payload.id)],
				bin: state.bin.filter(({ id })=>  id !== payload.id)
			}
		case "IMPORTANT":
			return {
				
			}
		default:
			return state;
	}
};
