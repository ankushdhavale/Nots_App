import { v4 as uuid } from "uuid";

export const notsReducer = (state, { type, payload }) => {
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
		case "CLARE":
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
					state.notes.find((id) => id === payload.id),
				],
			};
		case "TRASH":
			return {
				...state,
				notes: [
					...state.notes,
					{ text: state.text, title: state.title, id: uuid() },
				],
			};
		default:
			return state;
	}
};
