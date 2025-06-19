import { execSync } from "child_process";
import fs from "fs";

const logFile = "migration.log";

function runCommand(command:any) {
  try {
    console.log(`🚀 Running: ${command}`);
    fs.appendFileSync(logFile, `\nRunning: ${command}\n`);
    
    const output = execSync(command, { stdio: "pipe" }).toString();
    console.log(output);
    fs.appendFileSync(logFile, `${output}\n✅ Success!\n`);
  } catch (error:any) {
    console.error(`❌ Error: ${error.message}`);
    fs.appendFileSync(logFile, `❌ Error: ${error.message}\n`);
  }
}

export function setupDatabase() {
  console.log("🚀 Starting Prisma database setup...");
  fs.appendFileSync(logFile, `Migration started: ${new Date().toISOString()}\n`);
//runCommand('npx prisma migrate resolve --rolled-back "20250418083525_added"')

  //runCommand("npx prisma migrate reset --force");
  runCommand("npx prisma migrate deploy");
  // runCommand("npx prisma generate");

  console.log("✅ Database setup complete!");
  fs.appendFileSync(logFile, "Migration completed successfully.\n");
}

