import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-lg mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            PDFChat AI
          </Link>
          <h1 className="text-2xl font-bold mt-4">Create your account</h1>
          <p className="text-sm text-muted-foreground mt-1">Start chatting with your PDFs today</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <Label htmlFor="name" className="text-xs">Full Name</Label>
              <Input id="name" placeholder="John Doe" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email" className="text-xs">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="password" className="text-xs">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" className="mt-1" />
            </div>
          </div>

          <Button className="w-full">Create Account</Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline font-medium">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
