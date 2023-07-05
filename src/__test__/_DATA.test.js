import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";

describe('_saveQuestion', () => {
    it('will add the question when given correct input format', async () => {
        const correctQuestion = {
            optionOneText: "option one text",
            optionTwoText: "option two text",
            author: "author's name"
        }

        const resQuestion = await _saveQuestion(correctQuestion);
        expect(resQuestion.id).not.toBeNull();
    });

    it('will throw an error when given incorrect input option one format', async () => {
        const incorrectQuestion = {
            optionOne: "option one text",
            optionTwoText: "option two text",
            author: "author's name"
        }

        await expect(_saveQuestion(incorrectQuestion)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });

    it('will throw an error when given incorrect input option two format', async () => {
        const incorrectQuestion = {
            optionOneText: "option one text",
            optionTwo: "option two text",
            author: "author's name"
        }

        await expect(_saveQuestion(incorrectQuestion)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });

    it('will throw an error when given incorrect input author format', async () => {
        const incorrectQuestion = {
            optionOneText: "option one text",
            optionTwoText: "option two text",
            invalidAuthor: "author's name"
        }

        await expect(_saveQuestion(incorrectQuestion)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
})


describe('_saveQuestionAnswer', () => {
    it('will add the question answer when given correct input format', async () => {
        const correctQuestionAnswer = {
            authedUser: "sarahedo",
            qid: "am8ehyc8byjqgar0jgpub9",
            answer: "optionOne"
        }

        const resQuestionAnswer = await _saveQuestionAnswer(correctQuestionAnswer);
        expect(resQuestionAnswer).toBeTruthy();
    });

    it('will throw an error when given incorrect input authedUser format', async () => {
        const incorrectQuestion = {
            invalidAuthedUser: "sarahedo",
            qid: "am8ehyc8byjqgar0jgpub9",
            answer: "optionOne"
        }

        await expect(_saveQuestionAnswer(incorrectQuestion)).rejects.toEqual("Please provide authedUser, qid, and answer");
    });

    it('will throw an error when given incorrect input qid format', async () => {
        const incorrectQuestion = {
            authedUser: "sarahedo",
            invalidQid: "am8ehyc8byjqgar0jgpub9",
            answer: "optionOne"
        }

        await expect(_saveQuestionAnswer(incorrectQuestion)).rejects.toEqual("Please provide authedUser, qid, and answer");
    });

    it('will throw an error when given incorrect input answer format', async () => {
        const incorrectQuestion = {
            authedUser: "sarahedo",
            qid: "am8ehyc8byjqgar0jgpub9",
            invalidAnswerProperties: "optionOne"
        }

        await expect(_saveQuestionAnswer(incorrectQuestion)).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
});