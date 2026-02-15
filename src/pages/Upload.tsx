import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Upload as UploadIcon, FileText, Trash2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const mockFiles = [
  { name: "Annual Report 2024.pdf", size: "4.2 MB", status: "ready" as const },
  { name: "Contract Draft v3.pdf", size: "1.8 MB", status: "ready" as const },
  { name: "Research Paper.pdf", size: "2.1 MB", status: "ready" as const },
];

const Upload = () => {
  const [files, setFiles] = useState(mockFiles);
  const [uploading, setUploading] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // Mock upload
    setUploading(true);
    setTimeout(() => {
      setFiles((prev) => [
        { name: "New Document.pdf", size: "3.5 MB", status: "ready" },
        ...prev,
      ]);
      setUploading(false);
    }, 2000);
  };

  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">My PDFs</h1>
          <p className="text-sm text-muted-foreground mt-1">Upload and manage your documents</p>
        </div>

        {/* Upload Area */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="glass-card border-2 border-dashed border-border/60 hover:border-primary/40 transition-colors p-12 text-center cursor-pointer"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <UploadIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="font-medium">Drag & drop your PDF here</p>
              <p className="text-sm text-muted-foreground mt-1">or click to browse · Max 50MB</p>
            </div>
            <Button variant="outline" size="sm" className="mt-2">
              Browse Files
            </Button>
          </div>
        </div>

        {/* Upload Progress */}
        {uploading && (
          <div className="glass-card p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Uploading New Document.pdf...</span>
              <span className="text-xs text-muted-foreground">67%</span>
            </div>
            <Progress value={67} className="h-1.5" />
          </div>
        )}

        {/* File List */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Uploaded Files</h2>
          <div className="space-y-2">
            {files.map((file) => (
              <div key={file.name} className="glass-card p-4 flex items-center gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.size}</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() => removeFile(file.name)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Upload;
