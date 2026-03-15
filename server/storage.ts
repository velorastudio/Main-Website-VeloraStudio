import { db } from "./db";
import { leads, admins, type Lead, type InsertLead } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLead(id: number): Promise<Lead | undefined>;
  deleteLead(id: number): Promise<void>;
  getAdminByUsername(username: string): Promise<typeof admins.$inferSelect | undefined>;
  createAdmin(username: string, passwordHash: string): Promise<typeof admins.$inferSelect>;
}

export class DatabaseStorage implements IStorage {
  async createLead(lead: InsertLead): Promise<Lead> {
    const [created] = await db.insert(leads).values(lead).returning();
    return created;
  }

  async getLeads(): Promise<Lead[]> {
    return await db.select().from(leads).orderBy(leads.createdAt);
  }

  async getLead(id: number): Promise<Lead | undefined> {
    const [lead] = await db.select().from(leads).where(eq(leads.id, id));
    return lead;
  }

  async deleteLead(id: number): Promise<void> {
    await db.delete(leads).where(eq(leads.id, id));
  }

  async getAdminByUsername(username: string) {
    const [admin] = await db.select().from(admins).where(eq(admins.username, username));
    return admin;
  }

  async createAdmin(username: string, passwordHash: string) {
    const [admin] = await db.insert(admins).values({ username, passwordHash }).returning();
    return admin;
  }
}

export const storage = new DatabaseStorage();
