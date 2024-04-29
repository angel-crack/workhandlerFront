import { CaseReviewModel } from "./case-reviews.models";
import { CaseModel } from "./cases.models";
import { NoteModel } from "./notes.models";

export interface UserModel {
    _id: string,
    name: string,
    lastname: string,
    role: string,
    cases: CaseModel[],
    case_reviews: CaseReviewModel[],
    notes: NoteModel[]
}