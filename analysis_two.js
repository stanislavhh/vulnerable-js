/*
 * Copyright (C) 2009-2024 SonarSource SA
 * All rights reserved
 * mailto:info AT sonarsource DOT com
 */

const crypto = require("crypto");
const key = "123";
const iv = "12345";

crypto.createCipheriv("DES", key, iv); // Noncompliant
crypto.createCipheriv("DES", key, iv); // Noncompliant

const password = "1237";
console.log(password); // sensitive
console.log(password); // sensitive
console.log(password); // sensitive
