-- CreateTable
CREATE TABLE "UserAdm" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Premios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "quatidade" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PremiosRecebidos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "quatidade" INTEGER NOT NULL,
    "ganhadorid" TEXT NOT NULL,
    CONSTRAINT "PremiosRecebidos_ganhadorid_fkey" FOREIGN KEY ("ganhadorid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
