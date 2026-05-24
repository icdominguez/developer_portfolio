const stripHtmlTags = (html: string): string => {
    if (!html) return "";

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const text = tempDiv.innerText || tempDiv.textContent || "";
    return text;
};

export const countWords = (content: string): number => {
    if (!content) return 0;

    let text = content;

    try {
        const parsed = JSON.parse(content);
        if (parsed.content && Array.isArray(parsed.content)) {
            text = extractTextFromTiptapJson(parsed);
        }
    } catch {
        text = stripHtmlTags(content);
    }

    const words = text
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);

    return words.length;
};

const extractTextFromTiptapJson = (json: any): string => {
    let text = "";

    const traverse = (node: any) => {
        if (node.text) {
            text += node.text + " ";
        }
        if (node.content && Array.isArray(node.content)) {
            node.content.forEach((child: any) => traverse(child));
        }
    };

    if (json.content && Array.isArray(json.content)) {
        json.content.forEach((node: any) => traverse(node));
    }

    return text;
};
