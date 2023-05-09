// deno-lint-ignore-file valid-typeof

export function validateString(s: string) {
  if (!s) {
    return false;
  } else {
    return true;
  }
}

// s !== typeof "string"
