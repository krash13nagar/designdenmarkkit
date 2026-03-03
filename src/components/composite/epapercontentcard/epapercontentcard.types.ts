export type CardType = 'pdf' | 'story';

export type PdfVariant = 'normal' | 'indesign';

export interface EpaperContentCardProps {
    type: CardType;
    pdfVariant?: PdfVariant;
    data: any;
    showMergedLink?: boolean;
    onMergedClick?: (page: string) => void;
    renderIcon?: (ctx: { type: CardType; pdfVariant: PdfVariant; }) => React.ReactNode;
}
