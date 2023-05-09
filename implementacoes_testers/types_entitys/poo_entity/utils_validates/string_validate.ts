// deno-lint-ignore-file valid-typeof ban-unused-ignore

export function validateString(s: string) {
  if (!s) {
    return false;
  } else {
    return true;
  }
}

// s !== typeof "string"
