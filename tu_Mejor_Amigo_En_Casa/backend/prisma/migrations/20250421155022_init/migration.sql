-- CreateTable
CREATE TABLE `Usuarios` (
    `idusuariosGevt` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre_completoGevt` VARCHAR(191) NOT NULL,
    `CorreoGevt` VARCHAR(191) NOT NULL,
    `PasswordGevt` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuarios_CorreoGevt_key`(`CorreoGevt`),
    PRIMARY KEY (`idusuariosGevt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Razas` (
    `idrazasGevt` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreGevt` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idrazasGevt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categorias` (
    `idcategoriasGevt` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreGevt` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idcategoriasGevt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genero` (
    `idgeneroGevt` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreGevt` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idgeneroGevt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mascotas` (
    `idmascotasGevt` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreGevt` VARCHAR(191) NOT NULL,
    `idrazasGevt` INTEGER NOT NULL,
    `idcategoriasGevt` INTEGER NOT NULL,
    `idgeneroGevt` INTEGER NOT NULL,
    `estado` ENUM('ADOPTADO', 'PENDIENTE') NOT NULL,

    PRIMARY KEY (`idmascotasGevt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mascotas` ADD CONSTRAINT `Mascotas_idgeneroGevt_fkey` FOREIGN KEY (`idgeneroGevt`) REFERENCES `Genero`(`idgeneroGevt`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mascotas` ADD CONSTRAINT `Mascotas_idcategoriasGevt_fkey` FOREIGN KEY (`idcategoriasGevt`) REFERENCES `Categorias`(`idcategoriasGevt`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mascotas` ADD CONSTRAINT `Mascotas_idrazasGevt_fkey` FOREIGN KEY (`idrazasGevt`) REFERENCES `Razas`(`idrazasGevt`) ON DELETE RESTRICT ON UPDATE CASCADE;
