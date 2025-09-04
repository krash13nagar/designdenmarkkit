import { QuizSurveyCardLabels } from '../quizsurveycard.types';

export interface QuizSurveyCardFooterProps {
    cssClassName: any;
    questions: number;
    responses: number;
    dataSource?: any;
    agency: string;
    className?: string;
    labels?: QuizSurveyCardLabels;
}
