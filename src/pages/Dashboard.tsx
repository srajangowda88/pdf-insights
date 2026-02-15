import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { FileText, MessageSquare, TrendingUp, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const stats = [
  { label: "Total PDFs", value: "12", icon: FileText, change: "+3 this month" },
  { label: "Questions Asked", value: "247", icon: MessageSquare, change: "+42 this week" },
  { label: "AI Accuracy", value: "96%", icon: TrendingUp, change: "+2% improvement" },
];

const recentChats = [
  { name: "Annual Report 2024.pdf", lastMessage: "What were the key takeaways?", time: "2m ago" },
  { name: "Contract Draft v3.pdf", lastMessage: "Summarize section 4.2", time: "1h ago" },
  { name: "Research Paper.pdf", lastMessage: "What methodology was used?", time: "3h ago" },
  { name: "Product Roadmap.pdf", lastMessage: "List all Q1 deliverables", time: "Yesterday" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Welcome back, John</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Usage */}
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Monthly Usage</span>
            <span className="text-xs text-muted-foreground">247 / 500 questions</span>
          </div>
          <Progress value={49} className="h-2" />
          <p className="text-xs text-muted-foreground mt-2">Free plan · 253 questions remaining</p>
        </div>

        {/* Recent Chats */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Recent Chats</h2>
          <div className="space-y-2">
            {recentChats.map((chat) => (
              <div
                key={chat.name}
                className="glass-card p-4 flex items-center gap-4 hover-lift cursor-pointer"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{chat.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{chat.lastMessage}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                  <Clock className="h-3 w-3" />
                  {chat.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
