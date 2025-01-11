package com.cdp.chatbot;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.store.Directory;

public class DocumentSearcher {

    private final Directory directory;

    public DocumentSearcher(Directory directory) {
        this.directory = directory;
    }

    public String search(String question) {
        try {
            IndexReader reader = DirectoryReader.open(directory);
            IndexSearcher searcher = new IndexSearcher(reader);
            QueryParser parser = new QueryParser("content", new StandardAnalyzer());
            Query query = parser.parse(question);

            TopDocs results = searcher.search(query, 5);
            if (results.totalHits.value > 0) {
                Document doc = searcher.doc(results.scoreDocs[0].doc);
                return doc.get("content");
            } else {
                return "I couldn't find an answer to your question.";
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "An error occurred while processing your question.";
        }
    }
}
