import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "#fff",
    },
    backButton: {
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        position: "absolute",
        left: 0,
        right: 0,
        textAlign: "center",
        pointerEvents: "none",
    },
    placeholder: {
        width: 40,
    },
    contentWrapper: {
        padding: 20,
        paddingBottom: 40,
    },
    reportTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 12,
    },
    reportInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        marginBottom: 20,
    },
    reportInfoLabel: {
        fontSize: 12,
        color: "#999",
        marginBottom: 4,
    },
    reportInfoValue: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
    },
    statusBadge: {
        borderWidth: 1,
        borderColor: "#EF7810",
        backgroundColor: "#fff",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        alignSelf: "flex-start",
    },
    statusText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#EF7810",
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
        marginBottom: 8,
    },
    section: {
        marginBottom: 24,
    },
    descriptionBox: {
        backgroundColor: "#f9f9f9",
        padding: 12,
        borderRadius: 8,
    },
    descriptionText: {
        fontSize: 13,
        color: "#555",
        lineHeight: 20,
    },
    imageContainer: {
        flexDirection: "row",
        gap: 8,
        flexWrap: "wrap",
    },
    imageWrapper: {
        width: "30%",
        aspectRatio: 1,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#f0f0f0",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    answerBox: {
        backgroundColor: "#f9f9f9",
        padding: 12,
        borderRadius: 8,
    },
    answerDate: {
        fontSize: 12,
        color: "#999",
        marginBottom: 4,
    },
    answerText: {
        fontSize: 13,
        color: "#555",
        lineHeight: 20,
    },
});