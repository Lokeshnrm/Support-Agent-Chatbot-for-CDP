package com.cdp.chatbot;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.DirectoryWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.store.RAMDirectory;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class DocumentIndexer {

    private RAMDirectory directory;

    public DocumentIndexer() {
        this.directory = new RAMDirectory();
    }

    public void indexDocuments(String filePath) throws IOException {
        IndexWriterConfig config = new IndexWriterConfig(new StandardAnalyzer());
        try (DirectoryWriter writer = new DirectoryWriter(directory, config)) {
            String content = Files.readString(Path.of(filePath));
            Document doc = new Document();
            doc.add(new TextField("content", content, Field.Store.YES));
            writer.addDocument(doc);
        }
    }

    public RAMDirectory getDirectory() {
        return directory;
    }
}
